import { useContext, useState } from "react"
import { assets } from "../../food-del-assets/assets/frontend_assets/assets"
import './loginPopUp.css'
import { storeContext } from "../context/storeContext"
import axios from 'axios'
 
const LoginPopUp = ({setShowLogin}) => {
  const {url,token,setToken} = useContext(storeContext)
  const [currentState,setCurentState] = useState('Login')
  const [data,setData] = useState({
    name:'',
    email:'',
    password:''
  })
  const onchangeHandler = (event)=>{
      const name = event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
  }
  const onLogin = async (event)=>{
    event.preventDefault()
    let newUrl = url
    if(currentState === 'Login'){
      newUrl += '/api/user/login'
    }else{
      newUrl += '/api/user/register'
    }
    const response = await axios.post(newUrl,data)
    if(response.data.success){
      const tokenFromServer = response.data.token
      setToken(tokenFromServer)
     
        localStorage.setItem('token',tokenFromServer)
      
      setShowLogin(false)

    }else{
      alert(response.data.message)
    }



  }
 
  return (
    <div className="login-popup">
       <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2> {currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState==='Login'?'':<input name="name" onChange={onchangeHandler} value={data.name} type="text" placeholder="your name" required/>}
          <input name="email" value={data.email} onChange={onchangeHandler} type="email" placeholder="your email" />
          <input name="password" value={data.password} onChange={onchangeHandler} type="password" placeholder="password" required/>
        </div>
        <button type="submit"> {currentState==='Sign Up'?'Create account':'Login'} </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
        {currentState==='Login'
        ?<p>Create a new account? <span onClick={()=>setCurentState('Sign Up')}>Signin here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurentState('Login')}>Login here</span></p>
      }   
       </form>
    </div>
  )
}

export default LoginPopUp
