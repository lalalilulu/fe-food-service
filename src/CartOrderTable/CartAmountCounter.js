import React from "react";
import {ReactComponent as MinusIcon} from "../assets/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../assets/icons/plus.svg";
import "./cartOrderTable.scss";

function CartAmountCounter(props) {

    return (
        <div className="cart-counter">
            <a href="" className="icon-button"><MinusIcon/></a>
            <span className="item-amount">{props.amount}</span>
            <a href="" className="icon-button"><PlusIcon/></a>
        </div>
    );
}

export default CartAmountCounter;
