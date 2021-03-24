import React from "react";
import OrderTable from "./OrderTable";
import "./orders.scss";

function NewOrderClientList() {

    const newItems = require("../data/neworders.json").data;
    const newOrdersPossibleActions = [{name: "contact", description: "Contact support service"}, {name: "delete", description: "Cancel order"}];

    return (
        <div className="container-md justify-content-center form-container">
            <OrderTable items={newItems} actions={newOrdersPossibleActions}/>
            <p className="link-text text-center">Ready to make a new order? <a href="/" className="link">Menu Page</a></p>
        </div>
    );
}

export default NewOrderClientList;
