 import { useContext, useEffect, useState } from 'react'
import './myorders.css'
import { storeContext } from '../../../context/storeContext'
import axios from 'axios'
import { assets } from '../../../../food-del-assets/assets/frontend_assets/assets'

const Myorders = () => {
    const url = 'http://localhost:4000'
    const {token} = useContext(storeContext)
    const [data,setData] = useState([])
    const fetchOrders = async ()=>{
        const response = await axios.post(url + '/api/order/userorders',{},{headers:{token}})
        setData(response.data.data)
        console.log(response.data.data)
    }

    useEffect(()=>{
        if(token){
            fetchOrders()
        }
    },[ token])
  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
    <div className="container">
        {data.map((order)=>{
            return (
                 <div className='my-orders-order'>
                    <img src={assets.parcel_icon} alt='' />
                    <p>{order.items.map((item,index)=>{
                        if(index===order.items.length-1){
                            return item.name + ' X ' + item.quantity
                        }else{
                            return item.name+ ' X ' + item.quantity + ','
                        }

                    })}</p>
                    <p>{order.amount}.00 Birr</p>
                    <p>items: {order.items.length}</p>
                    <p><span>&#x25cf;</span><b>{order.status}</b></p>
                    <button>Track Order</button>

                 </div>
            )
        })}
        </div>      
    </div>
  )
}

export default Myorders
