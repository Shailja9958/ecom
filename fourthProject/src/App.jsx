
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css'


function App() {
  
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abc" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
