import { useState } from "react"
import { assets } from "../../food-del-assets/assets/frontend_assets/assets"
import './loginPopUp.css'
 
const LoginPopUp = ({setShowLogin}) => {
  const [currentState,setCurentState] = useState(' Sign Up')
  return (
    <div className="login-popup">
       <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2> {currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState==='Login'?'':<input type="text" placeholder="your name" required/>}
          <input type="email" placeholder="your email" />
          <input type="password" placeholder="password" required/>
        </div>
        <button> {currentState==='Sign Up'?'Create account':'Login'} </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
        {currentState==='Login'
        ?<p>Create a new account? <span onClick={()=>setCurentState('Sign Up')}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurentState('Login')}>Login here</span></p>
      }   
       </form>
    </div>
  )
}

export default LoginPopUp
