import React from "react";
import CartOrderRow from "../CartOrderRow/CartOrderRow";
import {connect} from "react-redux";
import "./cartOrderTable.scss";

function CartOrderTable(props) {
    console.log(props);

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
            {props.cartItems.map((cartItem, index) => (
                <CartOrderRow key={cartItem.id} cartItem={cartItem}/>
            ))}
            <tr>
                <td className="image-column"/>
                <td/>
                <td className="text-center order-total">TOTAL</td>
                <td className="text-center order-total-price">{props.total}$</td>
                <td/>
            </tr>
            </tbody>
        </table>
    );
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        total: state.cart.total
    }
}

export default connect(mapStateToProps, null)(CartOrderTable);

