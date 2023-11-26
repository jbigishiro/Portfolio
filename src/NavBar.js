import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav id="navbar">
            <NavLink exact to="/"> Home </NavLink>
            <NavLink to="/resume"> Resume </NavLink>
            <NavLink to="/projects"> Projects </NavLink>
            <NavLink to="/blogs"> Blogs </NavLink>
            <NavLink to="/contact"> Contact </NavLink>
        </nav>
    );
}

export default NavBar;