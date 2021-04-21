import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {toast} from "react-toastify";
import {addToCart} from "../_actions/CartActions";
import "./menu.scss";

function CategoryItem(props) {

    const {id, item} = props;
    const cartItem = props.cartItems.find(cartItem => cartItem.id === id);
    const addToCartNotify = () => toast.success(item.name + ' added to the cart');

    return (
        <div>
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
                <button type="button" className="btn btn-primary add-to-cart-btn" onClick={() => {
                    props.addToCart(item,1);
                    addToCartNotify();
                }}>Add to cart</button>
            </div>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item, amount) => dispatch(addToCart(item, amount))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
