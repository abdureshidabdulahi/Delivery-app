import { createContext,  useEffect,  useState } from "react";
import axios from 'axios'
 
 export const storeContext = createContext(null)


 const StoreContextProvider = (props)=>{
    const [cartItem,setCartItem] = useState({})
    const url = 'http://localhost:4000'
    const [food_list,setFood_list] = useState([])
    const [token,setToken] = useState(()=>localStorage.getItem('token') || '')

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

    const removeFromCart =async (itemId)=>{
        setCartItem((pre)=>({...pre,[itemId]:pre[itemId]-1}))
        if(token){
            await axios.post(url + '/api/cart/remove',{itemId},{headers:{token}})
        }
    }
   
 
 let totalAmount = 0;
   const getTotalCartAmount = (()=>{ 
    for(let key of food_list){
      
         
        //    let itemPrice = food_list.find((product)=>product._id === key);
        
        // totalAmount += itemPrice.price*cartItem[key]
      for(let n in key){
        if
      }
         
    } 
    // console.log('me inside',totalAmount)
     return totalAmount;
   })()

   const loadCartData =async ()=>{
           try{
             const response = await axios.get('http://localhost:4000/api/cart/get',{headers:{token}})
              setCartItem(response.data) 
            console.log('this is it cartitem',response.data)

           }catch(err){
            console.log('this is cartdataload from database error',err)


           }
   }
    
    // console.log('cart item',cartItem)
  



   const fetchFoodList = async ()=>{
    try{
       const response = await axios.get(`${url}/api/food/list`)
       console.log('this is foodlist',response.data.data)
       setFood_list(response.data.data)

    }catch(err){
        console.log('this is foodlist ERROR',err)


    }

   }
    fetchFoodList()
   
  
//    console.log('me outside',totalAmount)
 
   
 useEffect(  ()=>{
    
     
     if(localStorage.getItem('token')){
        setToken(localStorage.getItem('token'))
     }
     
   
      loadCartData()
      console.log('this is the token',token)

 },[])
 


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