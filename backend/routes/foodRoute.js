import express from 'express'

import {addfood, listeFood} from '../controllers/foodControllers.js'

import multer from 'multer'

const foodRouter = express.Router()


// Image Storage Engine 

const storage =  multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null,"uploads")
    },
    filename:(req,file,callback)=>{
              callback(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post('/add',upload.single("image"),addfood)

foodRouter.get('/list',listeFood)








export default foodRouter;