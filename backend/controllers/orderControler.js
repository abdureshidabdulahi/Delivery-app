 import orderModel from "../models/orderModel.js";
 import userModel from '../models/userModel.js';
  import Stripe from 'stripe'
 const stripe =  new Stripe(process.env.STRIPE_SECRET_KEY)


  //placing user order from frontend
  const  placeOrder = async (req,res)=>{
    const frontendUrl = 'http://localhost:3000'
        try {
            const newOrder = new orderModel({
                userId:req.userId,
                items:req.body.items,
                amount:req.body.amount,
                address:req.body.adddress
            })
            await newOrder.save()
            await userModel.findByIdAndUpdate(req.userId,{cartData:{}})

            const lineItems = req.body.items.map((item)=>({
                            price_data:{
                                currency:'inr',
                                productData:{
                                    name:item.name,
                                },
                                unitAmount:item.price*100*80
                            },
                            quantity:item.quantity
            }))
            lineItems.push({
                price_data:{
                    currency:'inr',
                    productData:{
                        name:'Delivery charges'
                    },
                    unitAmount:2*100*80
                },
                quantity:1
            })

            const session = await stripe.chechout.session.create({
                lineItems:lineItems,
                mode:'payment',
                successUrl:`${frontendUrl}/verify?success=true&orderId=${newOrder._id}`,
                cancelUrl :`${frontendUrl}/verify?success=false&orderId=${newOrder._id}`,
            })
            res.json({sucess:true,sessionUrl:session.url})
        } catch (error) {
            console.log(error)
            res.json({success:false,message:'error'})
            
        }

  }



  export {placeOrder}