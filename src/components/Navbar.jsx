import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/suLogo.svg";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-con h-20 border-btm w-screen min-w-screen flex justify-center items-center ">
      <nav className="max-w-[1920px] w-11/12 h-full flex items-center justify-normal">
        <Link to={'/'} className="div1 w-2/12 p-5 flex items-center justify-center h-full">
          <img className=" h-[20px]" src={logo} alt="Site Logo" />
        </Link>
        <div className="div2 relative min-w-6/12 w-6/12 h-full ">
        </div>
        <div className="div3 w-3/12 flex items-center justify-center text-white h-full ">
          <Menu/>
        </div>
        <div className="div4  h-full w-1/12">
          <div className="ctaBtn h-full w-full text-sky-950 bg-white flex items-center justify-center font-bold">
            Connect
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
