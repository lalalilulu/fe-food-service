import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {cartActions} from "../_actions/CartActions";
import {menuConstants} from "../_constants/MenuConstants";
import {history} from '../_helpers/History';
import "./style.scss";

function CategoryItem(props) {

    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);

    const {id, item} = props;
    const cartItem = cartItems.find(cartItem => cartItem.id === id);

    return (
        <div className="card-wrapper">
            <Link to={`/menu/${id}`}>
                <div className="card-img">
                    <img
                        className={`smooth-image image-${
                        loaded ? 'visible' : 'hidden'
                    }`} src={item.image} onLoad={() => setLoaded(true)} alt=""/>
                    {cartItem && loaded && <p>{cartItem.amount}</p>}
                </div>
                <div className="card-body">
                    <p>{item.name}</p>
                    <p className="itemPrice">{item.price}$</p>
                </div>
            </Link>
            <div className="my-card-footer">
                {item.id === '0' && <button type="button" className="btn btn-primary cart-item-btn" onClick={() => {
                    history.push(`/edit/${item.id}`);
                }}>Add new dish</button>}
                {item.status === menuConstants.PUBLISHED_STATUS &&
                <button type="button" className="btn btn-primary cart-item-btn"
                        onClick={() => dispatch(cartActions.addToCart(item, 1))}>Add to cart</button>}
                {item.status === menuConstants.BLOCKED_STATUS && <p className="notAvailable">Not Available</p>}
            </div>
        </div>
    );
}


export default CategoryItem;
