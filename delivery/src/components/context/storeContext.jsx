import { createContext, useState } from "react";
import { food_list } from "../../food-del-assets/assets/frontend_assets/assets";
 export const storeContext = createContext(null)

 const StoreContextProvider = (props)=>{
    const [cartItem,setCartItem] = useState({})

    const addToCart = (itemId)=>{
            if(!cartItem[itemId]){
                setCartItem((pre)=>({...pre,[itemId]:1}))
            }else{
                
            }
    }

    const contextValue={
            food_list
    }
    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )

 }
 export default StoreContextProvider