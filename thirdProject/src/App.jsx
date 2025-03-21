import ColorChange from "./pages/ColorChange"
import Conditional1 from "./pages/Conditional1"
import ExpenceTracker from "./pages/ExpenceTracker"
import "./index.css"
import ShowData from "./pages/ShowData"
import {BrowserRouter,Route, Routes}from 'react-router-dom'
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <div>
      {/* <h1 style={{textAlign:"center"}}>This is form page</h1> */}
      {/* <Conditional1/> */}
      {/* <ShowData/> */}
      {/* <ExpenceTracker/> */}
      {/* <Expence2/> */}
      {/* <ColorChange/> */}
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Conditional1 />} />
          <Route path="/Color change" element={<ColorChange />} />
          <Route path="/Expence tracker" element={<ExpenceTracker />} />
          <Route path="/Show data" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
