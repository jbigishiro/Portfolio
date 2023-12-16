import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav id="navbar">
            <NavLink className="navlink" exact to="/"> Home </NavLink>
            <NavLink className="navlink" to="/resume"> Resume </NavLink>
            <NavLink className="navlink" to="/projects"> Projects </NavLink>
            <NavLink className="navlink" to="/blogs"> Blogs </NavLink>
            <NavLink className="navlink" to="/contact"> Contact </NavLink>
        </nav>
    );
}

export default NavBar;