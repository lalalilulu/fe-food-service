import React from "react";
import "./styles/cart.scss";

function OrderItem(props) {
    return (
        <div className="orderItem">
            <div className="order-info">
                <p>Order No: {props.number}</p>
                <p>Date: {props.date}</p>
                <p>Status: {props.status}</p>
            </div>
            <div className="order-cost">
                <p>{props.cost}$</p>
            </div>
        </div>
    );
}

export default OrderItem;
