 import { assets } from '../../admin_assets/assets'
import './add.css'

const Add = () => {
  return (
    <div className='add'>
       <form className='flex-col' >
        <div className="add-image-upload flex-col">
                <p>upload Image</p>
                <lebel htmlfor='image'>
                <img src={assets.upload_area} alt="" />
                </lebel>
                <input type="file" id='image' hidden required />
        </div>
        <div className="add-product-name">
            <p>product name</p>
            <input type="text" name='name' placeholder='type here' />
        </div>
        <div className="add-product-description flex-col">
            <p>product descriptin</p>
            <textarea name="description" rows={6} placeholder='write content here' required></textarea>

        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>producn category</p>
                <select name="category"  >
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="pure veg">Pure veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noddles">Noddles</option>
                </select>
            </div>

        </div>
       </form>
    </div>
  )
}

export default Add
