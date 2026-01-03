 
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
         const foods = await foodmodel.find({})
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
export {addfood,listeFood}