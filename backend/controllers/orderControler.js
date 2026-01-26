 import orderModel from "../models/orderModel";
 import userModel from '../models/userModel.js';
  import Stripe from 'stripe'
 const stripe =  new Stripe(process.env.STRIPE_SECRET_KEY)


  //placing user order from frontend
  const  placeOrder = async (req,res)=>{
        try {
            const newOrder = new orderModel({
                userId:req.userId,
                items:req.body.items,
                amount:req.body.amount,
                address:req.body.adddress
            })
            await neworder.save()
            await userModel.findByIdAndUpdate(req.userId,{cartData:{}})
        } catch (error) {
            
        }

  }



  export {placeOrder}