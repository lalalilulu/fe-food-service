import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {ReactComponent as MinusIcon} from "../_assets/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../_assets/icons/plus.svg";
import {Link} from "react-router-dom";
import {menuConstants} from "../_constants/MenuConstants";
import {menuActions} from "../_actions/MenuActions";
import "./style.scss";

function ItemPreview({match}) {

    const items = useSelector(state => state.menu.items);
    const currentItem = useSelector(state => state.menu.currentItem);
    const item = currentItem && currentItem.id === match.params.id ? currentItem : items.find(dish => dish.id === match.params.id);
    const dispatch = useDispatch();

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
                            {item.status === menuConstants.PUBLISHED_STATUS && <div className="counter">
                                <button type="button" onClick={decrement} className="icon-button"><MinusIcon/></button>
                                <span className="item-amount">{amount}</span>
                                <button type="button" onClick={increment} className="icon-button"><PlusIcon/></button>
                            </div>}
                            <span className="regular-price">{price * amount}$</span>
                        </div>
                        <div className="row-buttons">
                            <button className="btn btn-primary product-btn" onClick={() => {}}>Add to cart</button>
                        </div>

                        <div className="row-buttons admin-buttons">
                            <Link to={`/edit/${id}`} className="btn btn-primary admin-button">Edit
                                dish</Link>
                            {item.id !== '0' &&
                            <button type="button" className="btn btn-primary admin-button"
                                    onClick={() => dispatch(menuActions.editItem(item))}>Save changes</button>}
                            {item.id === '0' &&
                            <button type="button" className="btn btn-primary admin-button"
                                    onClick={() => dispatch(menuActions.addItem(item))}>Add to menu</button>}
                            <Link to="/menu" className="btn btn-primary admin-button" onClick={() => dispatch(menuActions.resetEditing())}>Back to menu</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemPreview;
