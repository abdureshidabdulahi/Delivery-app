 import { assets } from '../../food-del-assets/assets/frontend_assets/assets';
import './navbar.css';

const navbar = () => {
  return (
    <div className='navbar'>
    <img src={assets.logo} className='logo'  alt=''/>
    <ul className='navbar-menu'>
      <li>home</li>
       <li>menu</li>
        <li>mobile-app</li>
         <li>contact us</li>
    
    </ul>
    <div className='navbar-menu-right'>
      <img src={assets.search_icon} className='search-icon' alt=''/>
      <div>
        <img src={assets.basket_icon} alt=''/>
        <div className='dot'></div>
         <button>sign in</button>
      </div>
   
    </div>

    </div> 
  )
}

export default navbar
