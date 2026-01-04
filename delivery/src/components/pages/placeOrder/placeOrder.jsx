 import { useContext } from 'react'
import './placeOrder.css'
import { storeContext } from '../../context/storeContext'

export default  function PlaceOrder(){
    const {getTotalCartAmount} =useContext(storeContext)
    return(
        <div className="placeorder-app">
            <form action="" className='place-order'>
            <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
                <input type="text" placeholder='frist name' /> 
                <input type="text" placeholder='last name' />
            </div>
            <input type="email" placeholder='Email Address' />
            <input type="text" placeholder='Street' />
              <div className="multi-fields">
                <input type="text" placeholder='City' /> 
                <input type="text" placeholder='State' />
            </div>
              <div className="multi-fields">
                <input type="text" placeholder=' Zip code' /> 
                <input type="text" placeholder=' Country' />
            </div>
            <input type="text" placeholder='Phone' />
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