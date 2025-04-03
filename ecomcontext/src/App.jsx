
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import View from './Pages/View';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Navbar from './Component/Navbar';



function App() {
  
let userStore = useContext(UserContext);
      console.log(userStore)
  let Login = userStore.user.Login 

  return (
    <>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={login === true ? <Home /> : <Navigate to="/Login" />}
          />
          <Route
            path="/Cart"
            element={login === true ? <Cart /> : <Navigate to="/Login" />}
          />
          <Route
            path="/View"
            element={login === true ? <View /> : <Navigate to="/Login" />}
          />
          <Route
            path="/Login"
            element={login === false ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/SignUp"
            element={login === false ? <SignUp /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
