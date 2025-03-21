import React from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Link} from "react-router-dom"
// import "./index.css";



const Navbar = (props) => {
  console.log(props)
  return (
    <nav>
      <ul>
        {/* <div>MyPage {props.x}</div> */}
        <div>
          <li>
            <Link to="/">
              Home <sup> {props.x} {props.y}</sup>
            </Link>
          </li>
          <li>
            <Link to="/abc">About <span>{props.title}</span> </Link>
          </li>
          <li>
            <Link to="/contact">Contact <span>{props.z}</span></Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar
