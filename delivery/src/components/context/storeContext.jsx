import { createContext,  useState } from "react";
import axios from 'axios'
import { food_list } from "../../food-del-assets/assets/frontend_assets/assets";
 export const storeContext = createContext(null)


 const StoreContextProvider = (props)=>{
    const [cartItem,setCartItem] = useState({})
    const url = 'http://localhost:4000'
    const [token,setToken] = useState(()=>{
        return   localStorage.getItem('token') || ''
    
    })

    const addToCart = async (itemId)=>{
            if(!cartItem[itemId]){
                setCartItem((pre)=>({...pre,[itemId]:1}))
            }else{
                setCartItem((pre)=>({...pre,[itemId]:pre[itemId]+1}))
            }
             if(token){
       await axios.post(url + '/api/cart/add',{itemId},{headers:{token}})
    }
    }
    const removeFromCart = (itemId)=>{
        setCartItem((pre)=>({...pre,[itemId]:pre[itemId]-1}))
    }
   
 
 let totalAmount = 0;
   const getTotalCartAmount = (()=>{
    console.log(cartItem)
    for(let key in cartItem){
      
         
           let itemPrice = food_list.find((product)=>product._id === key);
        
        totalAmount += itemPrice.price*cartItem[key]
    } 
    // console.log('me inside',totalAmount)
     return totalAmount;
   })()
//    console.log('me outside',totalAmount)
 
   
 
 


    const contextValue={
            food_list,
            cartItem,
            setCartItem,
            addToCart,
            removeFromCart,
            getTotalCartAmount,
            url,
            token,
            setToken,
            
             
    }
    // console.log('this is the cart items: ',cartItem)
  
    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )

 }
 export default StoreContextProvider