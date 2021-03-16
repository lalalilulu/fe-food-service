import React from "react";

export default function CountMark(props) {
    if (props.count === 0) {
        return null;
    }

    return (
        <div className="cart-items-count-container">
        <mark className="cart-items-count">{props.count}</mark>
        </div>
    );
}
