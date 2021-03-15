import React from "react";
import { Link } from "react-router-dom";
import "./styles/dashboard.scss";
import user from "./assets/icons/user.png";
import cart from "./assets/icons/shopping-cart.png";
import discount from "./assets/icons/discount.png";
import logout from "./assets/icons/logout.png";
import logo from "./assets/images/food-logo.png";

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
                    <Link to="/cart" className="discount-link"/>
                </li>
                <li>
                    <Link to="/" className="logout-link"/>
                </li>
            </ul>
        </nav>
    );
}
