 
 import Navbar from "./components/navbar/navbar";
 import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/home";
import Cart from "./components/pages/cart/cart";
import PlaceOrder from "./components/pages/placeOrder/placeOrder.jsx";
 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/placeOrder" element={<PlaceOrder/>}/>
      </Routes>
    </div>
  );
}

export default App;
