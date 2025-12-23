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

    const contextValue={
            food_list,
            cartItem,
            setCartItem,
            addToCart,
            removeFromCart
    }

    useEffect(()=>{
        console.log(cartItem)
    },[cartItem])
    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )

 }
 export default StoreContextProvider