
import { useContext } from 'react'
import './cart.css'
import { storeContext } from '../../context/storeContext'

export default function Cart(){
    const {cartItems,food_list,removeFromCart} = useContext(storeContext)
    return(
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br/>
                <hr/>
            </div>
        </div>
    )
}