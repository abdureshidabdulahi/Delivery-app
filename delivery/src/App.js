 
 import Navbar from "./components/navbar/navbar";
 import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/home";
import Cart from "./components/pages/cart/cart";
import PlaceOrder from "./components/pages/placeOrder/placeOrder.jsx";
import Footer from "./components/footer/footer.jsx";
import { useState } from "react";
import LoginPopUp from "./components/loginPopUp/loginPopUp.jsx";
import Verify from "./components/pages/verify/verify.jsx";
import Myorders from "./components/pages/placeOrder/myOrders/Myorders.jsx";
 

function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
     <div className="App">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/myorders" element={<Myorders/>}/>
      </Routes>
    </div>
    <Footer/>
    {/* <h1>hir react app is running</h1> */}
    </>
   
  );
}

export default App;
