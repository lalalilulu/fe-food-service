import React, {useState} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {addToCart} from '../_actions/CartActions'
import {ReactComponent as MinusIcon} from "../assets/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../assets/icons/plus.svg";
import "./item-details.scss";
import "../Autorisation/forms.scss";
import "./counter.scss";

function Item(props) {

    const items = require("../data/fooddata.json").data;
    const item = Array.from(items).find(dish => dish.id === props.match.params.id);
    const {image, name, description, ingredients, price, id} = item;

    const [amount, setAmount] = useState(1);
    const increment = () => {
        const tempResult = amount === 100 ? 100 : amount + 1;
        setAmount(tempResult);
    }

    const decrement = () => {
        const tempResult = amount === 1 ? 1 : amount - 1;
        setAmount(tempResult);
    }

    return (
        <div className="container-md item-details">
            <div className="row item-row">
                <div className="col-md-5 col-image">
                    <div className="product-details-img">
                            <a href={image}>
                                <img src={image} alt=""/>
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
                                <li key={ingredient} className="product-ingredient">
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                        <div className="mb-2 item-amount-container">
                            <div className="counter">
                                <button type="button" onClick={decrement} className="icon-button"><MinusIcon/></button>
                                <span className="item-amount">{amount}</span>
                                <button type="button" onClick={increment} className="icon-button"><PlusIcon/></button>
                            </div>
                            <span className="regular-price">{price*amount}$</span>
                        </div>
                            <button className="btn btn-primary form-btn product-btn" onClick={()=> {
                                props.addToCart(item,amount);}}>Add to cart</button>
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

 function  mapDispatchToProps(dispatch) {
     return {
         addToCart : (item, amount) => dispatch(addToCart(item, amount))
     };
}

export default connect(null, mapDispatchToProps)(Item);
