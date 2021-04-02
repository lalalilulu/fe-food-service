import React from "react";
import { Link } from "react-router-dom";
import plus from "../assets/icons/plus.png";
import "./menu.scss";

function MenuItem(props) {

    return (
        <Link to={`/menu/${props.id}`} className="card-container">
            <div className="card-img">
                <img src={props.image} alt="item-photo"/>
            </div>
            <div className="card-description">
                <p>{props.name}</p>
                <p className="itemPrice">{props.price}$</p>
            </div>
        </Link>
    );
}

export default MenuItem;
