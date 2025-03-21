
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import View from './Pages/View';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Navbar from './Component/Navbar';



function App() {
  
  return (
    <>
      <BrowserRouter>
      {/* <Navbar></Navbar> */}
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/View" element={<View />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
