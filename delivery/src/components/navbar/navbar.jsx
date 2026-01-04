 import { useContext, useState } from 'react';
import { assets } from '../../food-del-assets/assets/frontend_assets/assets';
import './navbar.css';
 import { Link } from 'react-router-dom';
import { storeContext } from '../context/storeContext';

const Navbar = ({setShowLogin}) => {
  const {getTotalCartAmount} = useContext(storeContext)
  const [menu,setMenu] =  useState('home')
   
  return (
    <div className='navbar'>
   <Link to='/'> <img src={assets.logo} className='logo'  alt=''/></Link>
    <ul className='navbar-menu'>
      <a href='/' onClick={()=>setMenu('home')} className={menu === 'home'?'active':''}>home</a>
       <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu === 'menu'?'active':''}>menu</a>
        <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu === 'mobile-app'?'active':''}>mobile-app</a>
         <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu === 'contact-us'?'active':''}>contact us</a>
    
    </ul>
    <div className='navbar-menu-right'>
      <img src={assets.search_icon} className='search-icon' alt=''/>
      <div className='navbar-search-icon'>
         <Link to='/cart'> <img src={assets.basket_icon} alt=''/></Link>
        <div className= {getTotalCartAmount !== 0?'dot':''}></div>
      
      </div>
      <button onClick={()=>setShowLogin(true)}>sign in</button>
    </div>

    </div> 
  )
}

export default Navbar
