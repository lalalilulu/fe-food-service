import React from "react";
import {ReactComponent as DeleteIcon} from "../assets/icons/trash-bin.svg";
import {connect} from "react-redux";
import {addToCart, removeFromCart} from "../_actions/CartActions";
import {ReactComponent as MinusIcon} from "../assets/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../assets/icons/plus.svg";
import "./orderRow.scss";
import "./counter.scss";

function CartOrderRow(props) {

    const {image, name, price} = props.cartItem.item;

    // const [amount, setAmount] = useState(props.cartItem.amount);
    //
    // const increment = () => {
    //     const tempResult = amount + 1;
    //     setAmount(tempResult);
    //     addToCart(props.cartItem.item);
    // }
    //
    // const decrement = () => {
    //     const tempResult = amount === 1 ? 1 : amount - 1;
    //     setAmount(tempResult);
    //     removeFromCart(props.cartItem.item);
    // }

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
                    props.removeFromCart(props.cartItem.item, props.cartItem.amount); }}><DeleteIcon/></button>
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
