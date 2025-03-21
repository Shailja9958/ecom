import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/Cart'}>Cart</Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
        <li>
          <Link>SignUp</Link>
        </li>
        <li>
          <Link>View</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
