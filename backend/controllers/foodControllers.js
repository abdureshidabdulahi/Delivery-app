 
import {foodmodel} from "../models/foodModel.js";

import fs from 'fs'

// add food item

const addfood = async(req,res)=>{
 
 const food = new foodmodel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image: req.file.filename
 })
 try{
    await food.save()
    res.json({
        success:true,
        message:'food added'

    })
 } catch(error){
    console.log(error)
    res.json({success:false,message:error})
 }
}

// all food list 

const listeFood = async (req,res)=>{
      try{
         const foods = await foodmodel.find()
         res.json({
            success:true,
            data:foods
         })
      }catch(error){
         res.json({
            success:false,
            message:`failed to fetch data ${error}`
         })
      }
}

// remove food item

const removeFood = async (req,res)=>{
   try{
      const food = await foodmodel.findById(req.body.id)
      // console.log('this is what you asked:',food)
      fs.unlink(`uploads/${food.image}`,()=>{})
      await foodmodel.findByIdAndDelete(req.body.id)
      console.log(foodmodel)
      res.json({
         success:'success',
         message:'Delete Success'
      })

   }catch(error){
      console.log('sory could not find the data')

   }
   
   
}
export {addfood,listeFood,removeFood}