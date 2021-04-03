import React from "react";
import OrderTable from "./OrderTable";
import "./orders.scss";

function OrderClientList() {

    const oldItems = require("../data/oldorders.json").data;
    const oldOrdersPossibleActions = [{name: "giveFeedback", description: "Leave a feedback about the order"}];

    return (
        <div className="container-md justify-content-center form-container">
            <OrderTable items={oldItems} actions={oldOrdersPossibleActions}/>
            <p className="link-text text-center">Ready to make a new order? <a href="/" className="link">Menu Page</a></p>
        </div>
    );
}

export default OrderClientList;
