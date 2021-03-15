import React from "react";
import { Link } from "react-router-dom";
import "./styles/dashboard.scss";

export function Navigation() {
    return (
        <nav className="navigation">
            <ul className="nav-links">
                <li>
                    <Link to="/profile" className="profile-link"/>
                </li>
                <li>
                    <Link to="/cart" className="cart-link" />
                </li>
                <li>
                    <Link to="/" className="logout-link"/>
                </li>
            </ul>
        </nav>
    );
}
