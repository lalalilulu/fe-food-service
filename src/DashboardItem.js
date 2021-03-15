import React from "react";
import "./styles/dashboard.scss";

function DashboardItem(props) {

    return (
        <div className="card-container">
            <div className="card-img">
                <img src={props.image} alt="item-photo"/>
            </div>
            <div className="card-content">
                <p>{props.name}</p>
                <p className="itemPrice">{props.price}$</p>
            </div>
        </div>
    );
}

export default DashboardItem;
