import React from "react";
import logo from "../assets/images/food-logo.png";
import "./nav.scss";

function Navbar(props) {
    return (
        <nav className="navbar container-md nav-container">
            <a href="/" className="navbar-brand">
                <img src={logo} alt="Food Service Logo" className="nav-logo d-inline-block align-top"/>
            </a>
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

export default Navbar
