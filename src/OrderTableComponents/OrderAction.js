import React from "react";
import ReactTooltip from "react-tooltip";
import "./orders.scss";

function OrderAction(props) {

    const {description, number, icon} = props;

    return (
        <div data-tip={description} data-for={number}>
            <a href="" className="icon-button">{icon}</a>
            <ReactTooltip id={number} type="info" place="bottom" backgroundColor="#7B1FA2" effect="float" event="mouseover" eventOff="mouseout"/>
        </div>
    );
}

export default OrderAction;
