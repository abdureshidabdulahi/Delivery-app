 
import './App.css';
import NavBar from './component/navBar/navBar';
import SideBar from './component/sideBar/sideBar';
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/add';
import List from './pages/list/list';
import Order from './pages/orders/order';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
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
