import React from "react";
import {ReactComponent as DeleteIcon} from "../_assets/icons/trash-bin.svg";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {addToCart, removeFromCart} from "../_actions/CartActions";
import {ReactComponent as MinusIcon} from "../_assets/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../_assets/icons/plus.svg";
import "./orderRow.scss";
import "./counter.scss";

function CartOrderRow(props) {

    const {image, name, price} = props.cartItem.item;
    const removeFromCartNotify = (itemName) => toast.success(itemName + ' removed from the cart');

    const dispatch = useDispatch();

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
                    <button type="button" onClick={()=> dispatch(removeFromCart(props.cartItem.item, 1))} className="icon-button"><MinusIcon/></button>
                    <span className="item-amount">{props.cartItem.amount}</span>
                    <button type="button" onClick={()=> dispatch(addToCart(props.cartItem.item, 1))} className="icon-button"><PlusIcon/></button>
                </div>
            </td>
            <td className="align-middle text-center action-item">
                {price*props.cartItem.amount}$
            </td>
            <td className="align-middle text-center action-item delete-icon">
                <button type="button" className="icon-button" onClick={()=> {
                    dispatch(removeFromCart(props.cartItem.item, props.cartItem.amount));
                    removeFromCartNotify(props.cartItem.item.name)}}><DeleteIcon/></button>
            </td>
        </tr>
    )
}

export default CartOrderRow;
