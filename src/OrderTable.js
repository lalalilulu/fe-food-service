import React from "react";
import "./styles/cart.scss";
import CartItem from "./CartItem";

function OrderTable(props) {

    return (
        <table className="order-table">
            <thead>
            <tr>
                <th className="order-table-cell order-table-title"/>
                <th className="order-table-cell order-table-title">Amount</th>
                <th className="order-table-cell order-table-title">Cost</th>
            </tr>
            </thead>
            <tbody>
            {props.items.map((item) => (
            <tr>
                    <td className="order-table-cell order-item-name">
                        {item.name}
                    </td>
                    <td>
                        {1}
                    </td>
                    <td className="order-table-cell">
                        {Math.floor(Math.random() * (150 - 10) + 10)}$
                    </td>
            </tr>
            ))}
            <tr>
                <td className="order-table-cell order-total">TOTAL</td>
                <td className="order-table-cell"/>
                <td className="order-table-cell order-total-price">{Math.floor(Math.random() * (450 - 100) + 100)}$</td>
            </tr>
            </tbody>
        </table>
    );
}

export default OrderTable;
