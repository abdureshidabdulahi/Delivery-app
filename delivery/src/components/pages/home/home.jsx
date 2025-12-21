 
import Header from '../../header/header'
import './home.css'
import ExploreMenu from '../../exploreMenu/exploreMenu'
import { useState } from 'react'
export  default function Home(){
  const [category,setCategory] = useState('all')
    return(
        <div className='home-app'>
          <Header/>
          <ExploreMenu category={category} setCategory={setCategory}/>
        </div>
    )
}