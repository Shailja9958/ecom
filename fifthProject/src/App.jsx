import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Learnhook from "./Learnhook";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Component/Navbar";


function App() {

  const [val, setval] = useState('');
  let xyz=(ans)=>{
    console.log(ans)
    setval(ans)
  }


  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home xyz={xyz}/>} />
          <Route path="/abc" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/useEffect" element={<Learnhook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
