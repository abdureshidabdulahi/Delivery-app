import { createContext } from "react";
import { food_list } from "../../food-del-assets/assets/frontend_assets/assets";
 export const storeContext = createContext(null)

 const StoreContextProvider = (props)=>{
    const contextVlue={
            food_list
    }
    return(
        <storeContext.Provider value={contextVlue}>
            {props.children}
        </storeContext.Provider>
    )

 }
 export default StoreContextProvider