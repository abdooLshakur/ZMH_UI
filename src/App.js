import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./component/ZMH FrontEnd/js/Homepage";
import Checkout from "./component/ZMH FrontEnd/js/Checkout";
import Cart from "./component/ZMH FrontEnd/js/Cart";
import Login from "./component/ZMH FrontEnd/js/Login";
import Signup from "./component/ZMH FrontEnd/js/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
          </Routes>
          </BrowserRouter>
        </div>
        );
}

        export default App;
