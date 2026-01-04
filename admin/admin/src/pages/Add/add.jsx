 import { useState } from 'react'
import { assets } from '../../admin_assets/assets'
import './add.css'

const Add = () => {
    const [image,setImage] = useState(false)
    const [data,setData] = useState({
        name:'',
        descripton:'',
        price:'',
        category:'salad'
    })

    const onchangeHandler = (e)=>{
            const name = e.target.name;
            console.log('this its it:',name)
            const value = e.target.value
            setData(data=>({...data,[name]:value}))
            console.log(data)
    }
  return (
    <div className='add'>
       <form className='flex-col' >
        <div className="add-image-upload flex-col">
                <p>upload Image</p>
                <label htmlFor='image'>
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>product name</p>
            <input onChange={onchangeHandler} value={data.name} type="text" name='rashka' placeholder='type here' />
        </div>
        <div className="add-product-description flex-col">
            <p>product description</p>
            <textarea name="description" rows={6} placeholder='write content here' required></textarea>

        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>producn category</p>
                <select name="category">
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
        <div className="add-pirce flex-col ">
        <p>product price</p>
        <input type="Number" name='price' placeholder='$20'/>
        </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
       </form>
    </div>
  )
}

export default Add
