 
import './App.css';
import NavBar from './component/navBar/navBar';
import SideBar from './component/sideBar/sideBar';
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/add';
import List from './pages/list/list';
import Order from './pages/orders/order';

function App() {
  return (
    <div className="App">
      <NavBar />
      <hr/>
      <div className='app-content'>
        <SideBar />
        <Routes>
        <Route path='/add' element={<Add/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/orders' element={<Order/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
