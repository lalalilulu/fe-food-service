import React from "react";
import more from "./assets/icons/moreInfo.png";
import plus from "./assets/icons/plus.png";
import "./styles/dashboard.scss";

function DashboardItem(props) {

    return (
        <div className="card-container">
            <div className="card-icons">
                <img className="details" src={more} alt="Details about dish"/>
                <img className="add" src={plus} alt="Add to cart"/>
            </div>
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
