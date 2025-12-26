 
import { assets } from '../../food-del-assets/assets/frontend_assets/assets'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=''/>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veritatis, explicabo magni a soluta tenetur. Delectus, quasi vel odit, reprehenderit nisi doloremque illum quam porro temporibus voluptate exercitationem dolore in!</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt=''/>
                 <img src={assets.twitter_icon} alt=''/>
                  <img src={assets.linkedin_icon} alt=''/>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+251952647567</li>
                <li>rashka2024boy@hotmail.com</li>
            </ul>
          
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        copywrite 2024 &copy; tomato.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
