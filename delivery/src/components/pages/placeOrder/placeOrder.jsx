 import { useContext, useState } from 'react'
import './placeOrder.css'
import { storeContext } from '../../context/storeContext'

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
        phone:''
    })
    const onchangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value
        setData(data=>({...data,[name]:value}))

    }
    return(
        <div className="placeorder-app">
            <form action="" className='place-order'>
            <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
                <input onChange={onchangeHandler} value={data.fristName} type="text" name='fristName' placeholder='frist name' /> 
                <input onChange={onchangeHandler} type="text" value={data.lastName} name='lastName' placeholder='last name' />
            </div>
            <input onChange={onchangeHandler} value={data.email} name='email' type="email" placeholder='Email Address' />
            <input onChange={onchangeHandler} value={data.street} name='street' type="text" placeholder='Street' />
              <div className="multi-fields">
                <input onChange={onchangeHandler} value={data.city} name='city' type="text" placeholder='City' /> 
                <input onChange={onchangeHandler} value={data.state} name='state' type="text" placeholder='State' />
            </div>
              <div className="multi-fields">
                <input onChange={onchangeHandler} value={data.zipcode} name='zipcode' type="text" placeholder=' Zip code' /> 
                <input onChange={onchangeHandler} value={data.country} name='country' type="text" placeholder=' Country' />
            </div>
            <input onchange={onchangeHandler} value={data.phone} name='phone' type="text" placeholder='Phone' />
            </div>
            <div className="place-order-right">
                  <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-tatal-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount}</p>
                        </div>
                        <hr />
                        <div className="cart-tatal-details">
                            <p>Delevery Fee</p>
                            <p>${getTotalCartAmount !== 0? 2 : 0}</p>
                        </div>
                        <hr />
                        <div className="cart-tatal-details">
                              <b>Total</b>
                              <b>${getTotalCartAmount !== 0 ?getTotalCartAmount + 2:getTotalCartAmount}</b>
                        </div> 
                    </div>
                       <button>PROCEED TO PAYMENT</button>
                </div>

            </div>
            </form>

        </div>
    )
}