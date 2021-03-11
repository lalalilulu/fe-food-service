import React from "react";
import { NavLink } from "react-router-dom";

export function Navigation() {
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <NavLink to="/" activeClassName="chosen" className="nav-link">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signup" activeClassName="chosen" className="nav-link">
                        Sign Up
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
