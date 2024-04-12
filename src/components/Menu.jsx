import React from "react";
import { Link, NavLink } from "react-router-dom";
import Project from "../Pages/Project";

function Menu() {
  return (
    <>
    <div className="menu-con flex items-center  w-3/12  justify-center">
        <ul className=" flex items-center justify-between gap-10">
           <NavLink to={'/Project'}> <li>About</li> </NavLink>
            <li>Works</li>
            <li>Contact</li>
        </ul>
    </div>
    </>
  );
}

export default Menu;
