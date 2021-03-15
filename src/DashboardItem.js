import React from "react";
import { Link } from "react-router-dom";
import "./styles/dashboard.scss";

function DashboardItem(props) {

    return (
        <Link className="card-container" to={`/item/${props.id}`}>
            <div className="card-img">
                <img src={props.image} alt="item-photo"/>
            </div>
            <div className="card-content">
                <p>{props.name}</p>
                <p className="itemPrice">{props.price}$</p>
            </div>
        </Link>
    );
}

export default DashboardItem;
