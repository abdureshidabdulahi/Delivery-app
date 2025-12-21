 
import Header from '../../header/header'
import './home.css'
import ExploreMenu from '../../exploreMenu/exploreMenu'
export  default function Home(){
    return(
        <div className='home-app'>
          <Header/>
          <ExploreMenu/>
        </div>
    )
}