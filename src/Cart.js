import React from "react";
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core';
import OrderTable from "./OrderTable";
import "./styles/cart.scss";

function Cart() {

    const json = require("./data/fooddata.json");
    const items = json.data.slice(5,10);

    // const cashPayment = document.getElementById("cash");
    // const changeLabel = document.querySelector(".change-checkbox");
    // const changeInput = document.querySelector(".change-label");
    // if(cashPayment.getAttribute("checked")) {
    //     changeLabel.style.display = "flex";
    //     changeInput.style.display = "flex";
    // }

    return (
        <div className="cart-container">
            <div className="modalHeader">
                <Link to="/dashboard" className="return-btn"/>
                <h2>My cart</h2>
            </div>
            <form name="cart-form" className="cart-form" action="#" method="post">
               <OrderTable items={items}/>

                <h3>Delivery information</h3>
                <div className="cart-info">
                    <div className="cart-pickers">
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
                    </div>
                    <input name="address" type="text" className="cart-input" placeholder="Enter your address" required/>
                    <input name="phone" type="tel" className="cart-input" placeholder="Enter your phone" required/>
                    {/*<label className="cutleryLabel" htmlFor="number-cutlery">Number of cutlery sets:</label>
                    <input className="cutleryInput" type="number" id="number-cutlery" name="number-cutlery" min="1" max="100" defaultValue={1}/>*/}
                </div>

                <h3>Comments</h3>
                <div className="cart-info">
                    <textarea className="cart-comment" id="order-comment" type="text" rows="3" placeholder="Write your comment here"/>
                </div>

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
                    <input type="checkbox" id="change" name="change" className="change-checkbox"/>
                    <label className="change-label" htmlFor="change">Need change?</label>
                </div>
                <button type="submit" className="btn cart-btn">Pay</button>
            </form>
        </div>
    );
}

export default Cart;
