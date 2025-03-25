import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/View">View </Link>
        </li>
        <li>
          <Link to="Cart">Cart </Link>
        </li>
        <li>
          <Link to="Login">Login </Link>
        </li>
        <li>
          <Link to="SignUp">SignUp</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
