 
import Header from '../../header/header'
import './home.css'
import ExploreMenu from '../../exploreMenu/exploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../foodDisplay/foodDisplay'
export  default function Home(){
  const [category,setCategory] = useState('all')
    return(
        <div className='home-app'>
          <Header/>
          <ExploreMenu category={category} setCategory={setCategory}/>
          <FoodDisplay category={category}/>
        </div>
    )
}