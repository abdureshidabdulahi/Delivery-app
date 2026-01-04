 import './sideBar.css'
import { assets } from '../../admin_assets/assets'
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </div>
         <div className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Item</p>
        </div>
         <div className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar
