import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/logo/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <span>
            <img className="h-12 w-12 rounded-full mr-3" src={logo} alt="" />
          </span>
          <span className="font-bold">Zahid Hasan</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
