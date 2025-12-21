 
 import Navbar from "./components/navbar/navbar";
 import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/home";
 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
