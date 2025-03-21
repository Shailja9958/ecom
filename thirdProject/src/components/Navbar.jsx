import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Color change">Color change</Link>
        </li>
        <li>
          <Link to="/">Condition1</Link>
        </li>
        <li>
          <Link to="/Expence tracker">Expence tracker</Link>
        </li>
        <li>
          <Link to="/Show data">Show data</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
