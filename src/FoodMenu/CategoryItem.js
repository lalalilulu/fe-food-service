import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {addToCart} from '../_actions/CartActions'
import "./menu.scss";

function CategoryItem(props) {

    const {id, item} = props;

    return (
        <div>
            <Link to={`/menu/${id}`} className="card-container">
                <div className="card-img">
                    <img src={item.image} alt=""/>
                </div>
                <div className="card-body">
                    <p>{item.name}</p>
                </div>
            </Link>
            <div className="card-item-footer">
                <p className="itemPrice">{item.price}$</p>
                <button type="button" className="btn btn-primary add-to-cart-btn" onClick={() => {
                    props.addToCart(item,1);}}>Add to cart</button>
            </div>
        </div>

    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item, amount) => dispatch(addToCart(item, amount))
    };
}

export default connect(null, mapDispatchToProps)(CategoryItem);
