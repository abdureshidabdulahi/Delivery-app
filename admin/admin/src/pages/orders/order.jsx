 import { useEffect, useState } from 'react'
 import axios from 'axios'
 import {toast} from 'react-toastify'
import './order.css'
import { assets } from '../../admin_assets/assets'

const Order = () => {
  const [data,setData] = useState([])
  // const [status,setStatus] =useState({})
  let url = 'http://localhost:4000'
  const orders = async ()=>{
    const response  = await axios.get(url + '/api/order/list')
    if(response.data.success){
      setData(response.data.data) 
      // console.log(response.data.data)
    }
    else{
      toast.error('error')
    }
  }
  const onSelectHandler = async (e,ordrid)=>{  
     
      let  response = await axios.post(url + '/api/order/statusorder',{_id:ordrid,status:e.target.value})
        //  console.log(e.target.value)
        console.log(response)
        
  }
  useEffect(()=>{
    orders()
    // console.log(status)
  },[ ])
  return (
    <div className='container'>
    <div className="conainer-element">
      <h1>Here Are All Orders</h1>
    
      {data.map((order)=>(
        <div className='items'>
         <div className="ha">
          <img src={assets.parcel_icon} alt="" />
         </div>
         <p className='order-item-food'>
          {order.items.map((item,index)=>{
            if(index === order.items.length-1){
              return item.name + ' x ' + item.quantity
            }else{
              return item.name + ' x ' + item.quantity + ','
            }
          })}

         </p>
         <p className='order-item-name'>
          {order.address.fristName + ' ' +order.address.lastName}
         </p>
         <p className='order-item-address'>
          <p>{order.address.street + ','}</p>
          <p>{order.address.city + ',' + order.address.state + ',' + order.address.country + ',' + order.address.zipcode}</p>
           <p>{order.address.phone}</p>
           <p>items:{order.items.length}</p>
           <p>{order.amount}</p>
         
         </p>
           <select onChange={(e)=>onSelectHandler(e,order._id)}>
            <option value='Food Processing'> Food Processing</option>
            <option  value='Out For Delivery'>Out For Delivery</option>
            <option   value='Delivered'>Delivered</option>
           </select>
         </div>
          
          
      )) }
       
    
    </div>
    </div>
  )
}

export default Order
