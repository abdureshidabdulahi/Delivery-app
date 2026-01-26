
import userModel from '../models/userModel.js'

// add items to user cart

const addToCart =async (req,res)=>{
    try{
        let userData = await userModel.findOne({_id:req.userId})
        const ras = req.userId 
        // console.log(req.body)
        
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }else{
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.userId,{cartData});
        res.json({success:true,message:'Added To Cart'})

    }catch(err){
        console.log(err)
        res.json({success:false,message:'error from adding addtocart function'})

    }

}




//remove from user cart 

const removeFromCart = async (req,res)=>{

    try{
        let userData = await userModel.findById(req.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1;

        }
   if(cartData[req.body.itemId] === 0){
        delete cartData[req.body.itemId]
       
   }
        await userModel.findByIdAndUpdate(req.userId,{cartData});
        res.json({success:true,message:'removed from cart'})
    }catch(err){
        console.log(err)
        res.json({success:false,message:'error'})

    }

}


//fetch user cart data

const getCart = async (req,res)=>{
    try{
        let userData = await userModel.findById(req.userId);
        let cartData = await userData.cartData
        res.json({cartData})
        console.log('background cartdata',cartData)
    }catch(err){
        // console.log('userid',req.body.userId)
        // console.log('thsi is body',req.body)
        console.log(err)
        res.json({success:false,message:'there is aproblem'})

    }


}

export {addToCart,removeFromCart,getCart}