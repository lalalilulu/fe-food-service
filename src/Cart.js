import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import { TextField } from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import CartItem from "./CartItem";
import "./styles/cart.scss";

function Cart() {
    //const [date, newDate] = useState(new Date());
    //const [time, newTime] = useState(new Date());

    const json = require("./fooddata.json");
    const items = json.recipe.slice(2,3).concat(json.recipe.slice(9,10)).concat(json.recipe.slice(13,15)).concat(json.recipe.slice(17,19));

    return (
        <div className="cart-container">
            <div className="modalHeader">
                <Link to="/dashboard" className="return-btn"/>
                <h2>My cart</h2>
            </div>
            <form name="cart-form" className="cart-form" action="#" method="post">
                <div className="outer-wrapper">
                <div className="inner-wrapper">
                        {items.map((item) => (
                            <div data-tip={item.description} data-for={item.id} className="item" key={item.name}>
                                <CartItem name={item.name} image={item.image} />
                                <ReactTooltip id={item.id} type="info" place="bottom" backgroundColor="#7B1FA2" effect="float" event="mouseover" eventOff="mouseout"/>
                            </div>
                        ))}
                </div>
                </div>
                <h3>Delivery information</h3>
                <div className="cart-info">
                    <div className="cart-pickers">
                        {/*<DatePicker className="cart-date-picker" required={true} value={date} onChange={newDate} />*/}
                        <TextField
                            id="time"
                            label="Delivery time"
                            type="time"
                            defaultValue="18:30"
                            className="cart-time-picker"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 1800, // 30 min
                            }}
                        />
                        {/*  <TimePicker className="cart-time-picker" minTime="11:00" maxTime="23:00" locale="sv-sv" required={true} value={time} onChange={newTime} />*/}
                    </div>
                    <input name="address" type="text" className="cart-input" placeholder="Enter your address" required/>
                    <input name="phone" type="tel" className="cart-input" placeholder="Enter your phone" required/>
                    {/*<label className="cutleryLabel" htmlFor="number-cutlery">Number of cutlery sets:</label>
                    <input className="cutleryInput" type="number" id="number-cutlery" name="number-cutlery" min="1" max="100" defaultValue={1}/>*/}
                </div>
                <h3>Comments</h3>
                <div className="cart-info">
                    <textarea className="cart-comment" id="order-comment" type="text" rows="1" cols="32" placeholder="Write your comment here"/>
                </div>
                <h3><span className="cart-total">Total: 280$</span></h3>
                <h3>Payment Method</h3>
                <div className="cart-info">
                    <ul className="payment">
                        <li>
                            <input type="radio" value="card" id="card" name="payment-method" className="payment-method" defaultChecked={true}/>
                            <label className="payment-label" htmlFor="card">Card</label>
                        </li>
                        <li>
                            <input type="radio" value="paypal" id="paypal" name="payment-method" className="payment-method"/>
                            <label className="payment-label" htmlFor="paypal">Paypal</label>
                        </li>
                        <li>
                            <input type="radio" value="cash" id="cash" name="payment-method" className="payment-method"/>
                            <label className="payment-label" htmlFor="paypal">Cash</label>
                        </li>
                    </ul>
                </div>
                <button type="submit" className="btn cart-btn">Pay</button>
            </form>
        </div>
    );
}

export default Cart;
