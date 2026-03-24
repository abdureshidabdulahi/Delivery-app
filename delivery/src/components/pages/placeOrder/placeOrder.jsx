 import { useContext, useState,useEffect } from 'react'
import './placeOrder.css'
import { storeContext } from '../../context/storeContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default  function PlaceOrder(){
    const {getTotalCartAmount,token,food_list,cartItem} =useContext(storeContext)
    const [data,setData] = useState({
        fristName:'',
        lastName:'',
        email:'',
        street:'',
        city:'',
        state:'',
        zipcode:'',
        country:'',
        phone:'',
    })
    const onchangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value
        setData(data=>({...data,[name]:value}))

    }
   
    const placeOfOrder =async (event)=>{
        event.preventDefault()
        
        let orderItems = [];
        food_list.map((item)=>{
                if(cartItem[item._id]){
                    let itemInfo = item
                    itemInfo['quantity']= cartItem[item._id]
                    orderItems.push(itemInfo)
                }
        })
         let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount + 30
    }
    let response = await axios.post('http://localhost:4000/api/order/place',orderData,{headers:{token}})
    if(response.data.success){
        const {session_url} = response.data
        window.location.replace(session_url)
    }else{
        alert('error in the orderdata in session')
    }
    }
    const  navigate = useNavigate()
    useEffect(()=>{
        if(!token){
            navigate('/cart')
        }else if(getTotalCartAmount === 0){
            navigate('/cart')
        }
    },[token])
   
    return(
        <div className="placeorder-app">
            <form  className='place-order' onSubmit={placeOfOrder}>
            <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
                <input required onChange={onchangeHandler} value={data.fristName} type="text" name='fristName' placeholder='frist name' /> 
                <input required onChange={onchangeHandler} type="text" value={data.lastName} name='lastName' placeholder='last name' />
            </div>
            <input required onChange={onchangeHandler} value={data.email} name='email' type="email" placeholder='Email Address' />
            <input required onChange={onchangeHandler} value={data.street} name='street' type="text" placeholder='Street' />
              <div className="multi-fields">
                <input required onChange={onchangeHandler} value={data.city} name='city' type="text" placeholder='City' /> 
                <input required onChange={onchangeHandler} value={data.state} name='state' type="text" placeholder='State' />
            </div>
              <div className="multi-fields">
                <input required onChange={onchangeHandler} value={data.zipcode} name='zipcode' type="text" placeholder=' Zip code' /> 
                <input required onChange={onchangeHandler} value={data.country} name='country' type="text" placeholder=' Country' />
            </div>
            <input required onChange={onchangeHandler} value={data.phone}   name='phone' type="text" placeholder='Phone' />
            </div>
            <div className="place-order-right">
                  <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-tatal-details">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount} Birr</p>
                        </div>
                        <hr />
                        <div className="cart-tatal-details">
                            <p>Delivery Fee</p>
                            <p>{getTotalCartAmount !== 0? 30 : 0} Birr</p>
                        </div>
                        <hr />
                        <div className="cart-tatal-details">
                              <b>Total</b>
                              <b>{getTotalCartAmount !== 0 ?getTotalCartAmount + 30:getTotalCartAmount} Birr</b>
                        </div> 
                    </div>
                       <button type='submit' >PROCEED TO PAYMENT</button>
                </div>

            </div>
            </form>

        </div>
    )
}