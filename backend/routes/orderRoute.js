import  express from 'express'
import  authMiddleware from '../middleWare/auth.js'
import {listOrders, placeOrder, stateOrder, userOrder, verifyOrder} from '../controllers/orderControler.js'

const orderRouter = express.Router()

orderRouter.post('/place',authMiddleware,placeOrder)
orderRouter.post('/verify',verifyOrder)
orderRouter.post('/userorders',authMiddleware,userOrder)
orderRouter.get('/list',listOrders)
orderRouter.post('/statusorder',stateOrder)

export default orderRouter