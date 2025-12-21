
import './exploreMenu.css'
import { menu_list } from '../../food-del-assets/assets/frontend_assets/assets'
export default function ExploreMenu({category,setCactagory}){
    return(
        <div className="exploremenu" id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>
            choose from a diverse menu featuring delectable array of dishes crafted with the 
            finest ingredients and culinary expertise our mission is to satisfy your cravings and elevate
            your dining experience,one delicious meal at a timer
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>(
                    <div key={index} className='explore-menu-list-item'>
                       <img src={item.menu_image} alt=""/>
                       <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
                <hr />
        </div>
    )
}