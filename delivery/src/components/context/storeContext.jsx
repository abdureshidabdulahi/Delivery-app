import { createContext, useEffect, useState } from "react";
import { food_list } from "../../food-del-assets/assets/frontend_assets/assets";
 export const storeContext = createContext(null)

 const StoreContextProvider = (props)=>{
    const [cartItem,setCartItem] = useState({})

    const addToCart = (itemId)=>{
            if(!cartItem[itemId]){
                setCartItem((pre)=>({...pre,[itemId]:1}))
            }else{
                setCartItem((pre)=>({...pre,[itemId]:pre[itemId]+1}))
            }
    }
    const removeFromCart = (itemId)=>{
        setCartItem((pre)=>({...pre,[itemId]:pre[itemId]-1}))
    }

   
   const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartItem){
        // console.log('here =',item)
        console.log(cartItem[item])
          if(cartItem[item]>0){
           let itemInfo = food_list.find((product)=>product._id === item);
        //    console.log(itemInfo)
        totalAmount += itemInfo.price*cartItem[item]
    }
    return totalAmount;
    }
     
  

   }
    const contextValue={
            food_list,
            cartItem,
            setCartItem,
            addToCart,
            removeFromCart,
            getTotalCartAmount
    }
    console.log('this is the cart items: ',cartItem)
  
    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )

 }
 export default StoreContextProvider