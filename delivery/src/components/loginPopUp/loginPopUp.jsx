import { useState } from "react"
import { assets } from "../../food-del-assets/assets/frontend_assets/assets"

 
const LoginPopUp = ({setShowLogin}) => {
  const [currentState,setCurentState] = useState('Sign Up')
  return (
    <div className="login-popup">
       <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>Login</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          <input type="text" placeholder="your name" required/>
          <input type="email" placeholder="your email" />
          <input type="password" placeholder="password" required/>
        </div>
        <button> {currentState==='Sign Up'?'Create account':'Login'} </button>
       </form>
    </div>
  )
}

export default LoginPopUp
