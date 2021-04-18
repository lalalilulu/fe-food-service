import React from "react";
import {ReactComponent as DeleteIcon} from "../assets/icons/trash-bin.svg";
import {connect} from "react-redux";
import {toast} from "react-toastify";
import {addToCart, removeFromCart} from "../_actions/CartActions";
import {ReactComponent as MinusIcon} from "../assets/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../assets/icons/plus.svg";
import "./orderRow.scss";
import "./counter.scss";

function CartOrderRow(props) {

    const {image, name, price} = props.cartItem.item;
    const removeFromCartNotify = (itemName) => toast.success(itemName + ' removed from the cart!');

    return (
        <tr>
            <td className="item-image">
                <img src={image} alt=""/>
            </td>
            <td className="align-middle text-center">
                {name}
            </td>
            <td className="align-middle">
                <div className="counter">
                    <button type="button" onClick={()=> {
                        props.removeFromCart(props.cartItem.item, 1);}} className="icon-button"><MinusIcon/></button>
                    <span className="item-amount">{props.cartItem.amount}</span>
                    <button type="button" onClick={()=> {
                        props.addToCart(props.cartItem.item, 1);}} className="icon-button"><PlusIcon/></button>
                </div>
            </td>
            <td className="align-middle text-center action-item">
                {price*props.cartItem.amount}$
            </td>
            <td className="align-middle text-center action-item delete-icon">
                <button type="button" className="icon-button" onClick={()=> {
                    props.removeFromCart(props.cartItem.item, props.cartItem.amount);
                    removeFromCartNotify(props.cartItem.item.name)
                }}><DeleteIcon/></button>
            </td>
        </tr>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        total: state.cart.total
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        removeFromCart : (item, amount) => dispatch(removeFromCart(item, amount)),
        addToCart : (item, amount) => dispatch(addToCart(item, amount)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartOrderRow);
