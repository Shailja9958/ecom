import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex content-center justify-center gap-3 mt-3">
        <li className="h-[30px] w-[60px] bg-amber-300 rounded-l pb-1  ">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="h-[30px] w-[60px] bg-amber-300 rounded-l pb-1 ">
          <Link to={"/Cart"}>Cart</Link>
        </li>
        <li className="h-[30px] w-[60px] bg-amber-300 rounded-l pb-1 ">
          <Link to={"/Login"}>Login</Link>
        </li>
        <li className="h-[30px] w-[60px] bg-amber-300 rounded-l pb-1 ">
          <Link to={"/SignUp"}>SignUp</Link>
        </li>
        <li className="h-[30px] w-[60px] bg-amber-300 rounded-l pb-1 ">
          <Link to={"/View"}>View</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
