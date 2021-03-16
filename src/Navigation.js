import React from "react";
import { Link } from "react-router-dom";
import CountMark from "./CountMark";
import "./styles/dashboard.scss";

export function Navigation(props) {
    return (
        <nav className="navigation">
            <ul className="nav-links">
                <li>
                    <Link to="/profile" className="profile-link"/>
                </li>
                <li>
                    <Link to="/cart" className="cart-link" />
                    <CountMark count={props.count}/>
                </li>
                <li>
                    <Link to="/" className="logout-link"/>
                </li>
            </ul>
        </nav>
    );
}
