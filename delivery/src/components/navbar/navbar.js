 import { useState } from 'react';
import { assets } from '../../food-del-assets/assets/frontend_assets/assets';
import './navbar.css';

const Navbar = () => {
  const [menu,setMenu] =  useState('home')
  return (
    <div className='navbar'>
    <img src={assets.logo} className='logo'  alt=''/>
    <ul className='navbar-menu'>
      <li onClick={()=>setMenu('home')} className={menu === 'home'?'active':''}>home</li>
       <li onClick={()=>setMenu('menu')} className={menu === 'menu'?'active':''}>menu</li>
        <li onClick={()=>setMenu('mobile-app')} className={menu === 'mobile-app'?'active':''}>mobile-app</li>
         <li onClick={()=>setMenu('contact-us')} className={menu === 'contact-us'?'active':''}>contact us</li>
    
    </ul>
    <div className='navbar-menu-right'>
      <img src={assets.search_icon} className='search-icon' alt=''/>
      <div>
        <img src={assets.basket_icon} alt=''/>
         
      
      </div>
      <button>sign in</button>
    </div>

    </div> 
  )
}

export default Navbar
