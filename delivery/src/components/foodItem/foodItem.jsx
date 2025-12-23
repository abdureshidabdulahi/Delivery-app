 
 import { assets } from '../../food-del-assets/assets/frontend_assets/assets'
import './foodItem.css'
const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
         <p className="food-item-description">{description}</p>
         <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
