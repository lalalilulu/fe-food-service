import React from "react";
import {Link} from "react-router-dom";
import "./menu.scss";

function CategoryItem({id, image, name, price}) {

    return (
        <Link to={`/menu/${id}`} className="card-container">
            <div className="card-img">
                <img src={image} alt=""/>
            </div>
            <div className="card-body">
                <p>{name}</p>
            </div>
            <div className="card-item-footer">
                <p className="itemPrice">{price}$</p>
                <button type="button" className="btn btn-primary add-to-cart-btn">Add to cart</button>
            </div>
        </Link>
    );
}

export default CategoryItem;
