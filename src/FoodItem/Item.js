import React, {useState} from "react";
import "./item-details.scss";
import "../Autorisation/forms.scss";
import {Link} from "react-router-dom";
import AmountCounter from "../AmountCounter/AmountCounter";

function Item({match}) {

    const items = require("../data/fooddata.json").data;
    const item = Array.from(items).find(dish => dish.id === match.params.id);
    const {image, name, description, ingredients, price, id} = item;

    const [amount, setAmount] = useState(1);
    const changeAmount = (amount) => {
        setAmount(amount);
    }

    return (
        <div className="container-md item-details">
            <div className="row item-row">
                <div className="col-md-5 col-image">
                    <div className="product-details-img">
                            <a href={image}>
                                <img src={image} alt="Product"/>
                            </a>
                    </div>
                </div>
                <div className="col-md-7 col-custom">
                    <div className="product-summery position-relative">
                        <div className="product-head mb-3">
                            <h2 className="product-title">{name}</h2>
                        </div>
                        <p className="desc-content mb-5">{description}</p>
                        <ul className="product-ingredients">
                            {ingredients.map((ingredient) => (
                                <li className="product-ingredient">
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                        <div className="mb-2 item-amount-container">
                            <AmountCounter amount={amount} onChange={changeAmount}/>
                            <span className="regular-price">{price*amount}$</span>
                        </div>
                            <button className="btn btn-primary form-btn product-btn">Add to cart</button>
                        <div className="admin-buttons mb-4">
                            <Link to={`/edit/${id}`} className="btn btn-primary form-btn product-btn admin-button">Edit Dish (Admin)</Link>
                            <Link to={`/delete/${id}`} className="btn btn-primary form-btn product-btn admin-button">Delete Dish (Admin)</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
