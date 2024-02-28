import './App.css';
import Navbar from "./Component/Navbar"
import {Router,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Cart from "./Pages/Cart"
import { Routes } from "react-router-dom";



function App() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
  );
}

export default App;
