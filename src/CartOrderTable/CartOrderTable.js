import React from "react";
import CartOrderRow from "../CartOrderRow/CartOrderRow";
import "./cartOrderTable.scss";

function CartOrderTable(props) {

    return (
        <table className="table table-hover custom-table">
            <thead>
            <tr>
                <th scope="col"/>
                <th scope="col" className="text-center">Dish</th>
                <th scope="col" className="text-center">Amount</th>
                <th scope="col" className="text-center">Cost</th>
            </tr>
            </thead>
            <tbody>
            {props.items.map((item) => (
                <CartOrderRow item={item}/>
            ))}
            <tr>
                <td/>
                <td/>
                <td className="text-center order-total">TOTAL</td>
                <td className="text-center order-total-price">{Math.floor(Math.random() * (450 - 100) + 100)}$</td>
            </tr>
            </tbody>
        </table>
    );
}

export default CartOrderTable;
