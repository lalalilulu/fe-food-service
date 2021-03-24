import React from "react";
import ReactTooltip from "react-tooltip";
import "./orders.scss";

function OrderAction(props) {

    return (
        <div data-tip={props.description} data-for={props.number}>
            <a href="" className="icon-button">{props.icon}</a>
            <ReactTooltip id={props.number} type="info" place="bottom" backgroundColor="#7B1FA2" effect="float" event="mouseover" eventOff="mouseout"/>
        </div>
    );
}

export default OrderAction;
