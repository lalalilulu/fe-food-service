import React from "react";
import OrderTable from "./OrderTable";
import "./orders.scss";

function OrderAdminList() {

    const items = require("../data/neworders.json").data;
    const possibleActions = [{name: "assign", description: "Assign order to a courier "}, {name: "reject", description: "Reject order"}];

    return (
        <div className="container-md justify-content-center form-container">
            <OrderTable items={items} actions={possibleActions}/>
            <p className="link-text text-center">Ready to make a new order? <a href="/" className="link">Menu Page</a></p>
        </div>
    );
}

export default OrderAdminList;
