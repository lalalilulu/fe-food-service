import React from "react";
import CartOrderRow from "../CartOrderRow/CartOrderRow";
import {useSelector} from "react-redux";
import "./style.scss";

function CartOrderTable() {

    const cartItems = useSelector(state => state.cart.cartItems);
    const total = useSelector(state => state.cart.total);

    return (
        <table className="table table-hover custom-table">
            <thead>
            <tr>
                <th scope="col" className="image-header"/>
                <th scope="col" className="text-center">Dish</th>
                <th scope="col" className="text-center">Amount</th>
                <th scope="col" className="text-center">Cost</th>
                <th scope="col"/>
            </tr>
            </thead>
            <tbody>
            {cartItems.map((cartItem) => (
                <CartOrderRow key={cartItem.id} cartItem={cartItem}/>
            ))}
            <tr>
                <td className="image-column"/>
                <td/>
                <td className="text-center order-total">TOTAL</td>
                <td className="text-center order-total-price">{total}$</td>
                <td/>
            </tr>
            </tbody>
        </table>
    );
}

export default CartOrderTable;

