 import { response } from "express";
import orderModel from "../models/orderModel.js";
 import userModel from '../models/userModel.js';
  import Stripe from 'stripe'
 const stripe =  new Stripe(process.env.STRIPE_SECRET_KEY)


  //placing user order from frontend
  const  placeOrder = async (req,res)=>{
    const frontendUrl = 'http://localhost:3001'
       let ETB_TO_USD = 0.0185
    // let usdEthio = 0.0185 
        try {
            const newOrder = new orderModel({
                userId:req.userId,
                items:req.body.items,
                amount: req.body.amount,
                address:req.body.address
            })
            await newOrder.save() 
            await userModel.findByIdAndUpdate(req.userId,{cartData:{}})
              
            const lineItems = req.body.items.map((item)=>({
               
                            price_data:{
                                currency:'usd',
                                product_data:{
                                    name:item.name,
                                },
                                unit_amount:Math.round(item.price*100*ETB_TO_USD)
                            },
                            quantity:item.quantity
            }))
            lineItems.push({
                price_data:{
                    currency:'usd',
                    product_data:{
                        name:'Delivery charges'
                    },
                    unit_amount:Math.round(30*ETB_TO_USD*100)
                },
                quantity:1
            })

            const session = await stripe.checkout.sessions.create({
                line_items:lineItems,
                mode:'payment',
                success_url:`${frontendUrl}/verify?success=true&orderId=${newOrder._id}`,
                cancel_url :`${frontendUrl}/verify?success=false&orderId=${newOrder._id}`,
            })
            res.json({success:true,session_url:session.url})
        } catch (error) {
            console.log(error)
            res.json({success:false,message:'error'})
            
        }

  }

  const verifyOrder = async (req,res)=>{
         const {orderId,success} = req.body
         try {
            if(success==='true'){
                await orderModel.findByIdAndUpdate(orderId,{payment:true})
                res.json({success:true,message:'paid'})
            }
            else{
                await orderModel.findByIdAndDelete(orderId)
                res.json({success:false,message:'not paid'})
            }

            
         } catch (error) {
            console.log(error)
            res.json({success:false,message:'error in verify function'})
            
         }

  }
  //user order for frontend

  const userOrder = async (req,res)=>{
     try {
        const orders = await orderModel.find({userId:req.userId})
        res.json({success:true,data:orders})
        
     } catch (error) {
        console.log(error)
        res.json({success:false,message:'error from order of the user in userOrder function'})
     }
  }

  //listing orders for admin panel
  const listOrders = async (req,res)=>{
            try {
                const order = await orderModel.find({})
                res.json({success:true,data:order})

            } catch (error) {
                console.log(error)
                res.json({success:false,message:'error'})
                
            }
  }

  //admin changin the status

  const stateOrder = async (req,res)=>{
    try {
        
    const result = await orderModel.findByIdAndUpdate(req.body._id,{status:req.body.status})
    res.json({success:true,message:result})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:'erro'})
    }

  }

  export {placeOrder,verifyOrder,userOrder,listOrders,stateOrder}