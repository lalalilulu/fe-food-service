import React from "react";
import {TextField} from '@material-ui/core';
import CartOrderTable from "../CartOrderTable/CartOrderTable";
import Input from "../Input/Input";
import "./cart.scss";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

function Cart() {

    const theme = createMuiTheme({
        palette: {
            primary: {main: '#863788'},
            secondary: {main: '#E040FB'},
        },
    });

    const json = require("../data/fooddata.json");
    const items = json.data.slice(5, 8);

    // const cashPayment = document.getElementById("cash");
    // const changeLabel = document.querySelector(".change-checkbox");
    // const changeInput = document.querySelector(".change-label");
    // if(cashPayment.getAttribute("checked")) {
    //     changeLabel.style.display = "flex";
    //     changeInput.style.display = "flex";
    // }

    return (

        <form name="cart-form" className="container-fluid cart-form" action="#" method="post">

            <div className="container-sm justify-content-center">
                <CartOrderTable items={items}/>
            </div>

            <div className="container-sm justify-content-center">
                <h3>Delivery information</h3>
                    <div className="cart-inputs">
                        <Input type="address" name="address" id="address" labelContent="Address"/>
                        <Input type="phone" name="phone" id="phone" labelContent="Phone"/>
                    </div>

                    {/*<label className="cutleryLabel" htmlFor="number-cutlery">Number of cutlery sets:</label>
                    <input className="cutleryInput" type="number" id="number-cutlery" name="number-cutlery" min="1" max="100" defaultValue={1}/>*/}


                <h3>Comments</h3>
                <div className="cart-info">
                    <textarea className="cart-comment" id="order-comment" type="text" rows="3"
                              placeholder="Write your comment here"/>
                </div>

                <div className="payment">
                    <MuiThemeProvider theme={theme}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend"><h3>Payment Method</h3></FormLabel>
                            <RadioGroup row defaultValue="card" aria-label="payment method" name="payment-radios" className="payment-options">
                                <FormControlLabel value="card" control={<Radio color="secondary"/>} label="Card"/>
                                <FormControlLabel value="paypal" control={<Radio color="secondary"/>} label="Paypal"/>
                                <FormControlLabel value="cash" control={<Radio color="secondary"/>} label="Cash"/>
                            </RadioGroup>
                        </FormControl>
                    </MuiThemeProvider>
                </div>
            </div>
            <button className="btn form-btn cart-btn">Confirm/Pay</button>
        </form>

    );
}

export default Cart;
