import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {cartActions} from '../_actions/CartActions'
import {ReactComponent as MinusIcon} from "../_assets/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../_assets/icons/plus.svg";
import {userConstants} from "../_constants/UserConstants";
import {history} from "../_helpers/History";
import {menuConstants} from "../_constants/MenuConstants";
import {menuActions} from "../_actions/MenuActions";
import "./item-details.scss";
import "./counter.scss";

function Item({match}) {

    const items = useSelector(state => state.menu.items);
    const currentUser = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    const item = items.find(dish => dish.id === match.params.id);
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
        <div className="container">
            <div className="row item-row">
                <div className="col-md-5 col-image">
                    <div className="product-details-img">
                        <a href={image}>
                            <img src={image} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 col-custom">
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
                            {item.status === menuConstants.PUBLISHED_STATUS &&
                            <button className="btn btn-primary product-btn" onClick={() =>
                                dispatch(cartActions.addToCart(item, amount))
                            }>Add to cart</button>}
                            <button className="btn btn-primary product-btn" onClick={() => {
                                history.push('/menu');
                            }}>Back to menu
                            </button>
                        </div>
                        {currentUser && currentUser.role === userConstants.ADMIN_ROLE &&
                        <div className="row-buttons admin-buttons">
                            <Link to={`/edit/${id}`} className="btn btn-primary admin-button">Edit
                                dish</Link>
                            {item.status !== menuConstants.UNPUBLISHED_STATUS &&
                            <button type="button" className="btn btn-primary admin-button"
                                    onClick={() => dispatch(menuActions.unpublish(item))}>Unpublish</button>}
                            {item.status === menuConstants.UNPUBLISHED_STATUS &&
                            <button type="button" className="btn btn-primary admin-button"
                                    onClick={() => dispatch(menuActions.publish(item))}>Publish</button>}
                            {item.status === menuConstants.BLOCKED_STATUS &&
                            <button type="button" className="btn btn-primary admin-button"
                                    onClick={() => dispatch(menuActions.unblock(item))}>Unblock</button>}
                            {item.status !== menuConstants.BLOCKED_STATUS &&
                            <button type="button" className="btn btn-primary admin-button"
                                    onClick={() => dispatch(menuActions.block(item))}>Block</button>}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
