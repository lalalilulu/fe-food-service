import React from "react";
import "./item-details.scss";
import "../Autorisation/forms.scss";
import CartAmountCounter from "../CartOrderTable/CartAmountCounter";
import MenuItem from "../FoodMenu/MenuItem";
import {Link} from "react-router-dom";

function Item({match}) {

    const items = require("../data/fooddata.json").data;
    const item = Array.from(items).find(dish => dish.id === match.params.id);

    return (
        <div className="container-md item-details">
            <div className="row item-row">
                <div className="col-md-5 col-image">
                    <div className="product-details-img">
                            <a href={item.image}>
                                <img src={item.image} alt="Product"/>
                            </a>
                    </div>
                </div>
                <div className="col-md-7 col-custom">
                    <div className="product-summery position-relative">
                        <div className="product-head mb-3">
                            <h2 className="product-title">{item.name}</h2>
                        </div>
                        <div className="mb-2">
                            <span className="regular-price">80$</span>
                        </div>
                        <p className="desc-content mb-5">{item.description}</p>
                        <ul className="product-ingredients">
                            {item.ingredient.map((ingredient) => (
                                <li className="product-ingredient">
                                    {ingredient}
                                </li>
                            ))}
                        </ul>

                        <div className="quantity-with_btn mb-4">
                            <CartAmountCounter amount={1}/>
                            <button className="btn btn-primary form-btn product-btn">Add to cart</button>
                        </div>
                        <div className="admin-buttons mb-4">
                            <Link to={`/edit/${item.id}`} className="btn btn-primary form-btn product-btn admin-button">Edit Dish (Admin)</Link>
                            <Link to={`/delete/${item.id}`} className="btn btn-primary form-btn product-btn admin-button">Delete Dish (Admin)</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
