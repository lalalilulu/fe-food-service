import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {cartActions} from "../_actions/CartActions";
import {menuConstants} from "../_constants/MenuConstants";
import {history} from '../_helpers/History';
import "./menu.scss";

function CategoryItem(props) {

    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const {id, item} = props;
    const cartItem = cartItems.find(cartItem => cartItem.id === id);

    return (
        <div
            className={item.status === menuConstants.BLOCKED_STATUS || item.status === menuConstants.UNPUBLISHED_STATUS ? "opacity50" : "opacity100"}>
            <Link to={`/menu/${id}`} className="card-container">
                <div className="card-img">
                    <img src={item.image} alt=""/>
                    {cartItem && <p>{cartItem.amount}</p>}
                </div>
                <div className="card-body">
                    <p>{item.name}</p>
                </div>
            </Link>
            <div className="card-item-footer">
                <p className="itemPrice">{item.price}$</p>
                {item.id === '0' && <button type="button" className="btn btn-primary cart-item-btn" onClick={() => {
                    history.push(`/edit/${item.id}`);
                }}>Add new dish</button>}
                {item.status === menuConstants.PUBLISHED_STATUS &&
                <button type="button" className="btn btn-primary cart-item-btn"
                        onClick={() => dispatch(cartActions.addToCart(item, 1))}>Add to cart</button>}
                {item.status === menuConstants.BLOCKED_STATUS && <p className="itemPrice">Not Available</p>}
            </div>
        </div>

    );
}


export default CategoryItem;
