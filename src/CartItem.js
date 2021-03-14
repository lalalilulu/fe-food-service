import React from "react";
import "./styles/cart.scss";

function CartItem(props) {
    return (
        <div>
            <img className="item-icon" src={props.image} alt="" />
            <p className="item-title">{props.name}</p>
        </div>
    );
}

export default CartItem;
