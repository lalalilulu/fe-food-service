import React, {useState} from "react";
import {TextField} from '@material-ui/core';
import Select from 'react-select';
import CartOrderTable from "../CartOrderTable/CartOrderTable";
import Input from "../Input/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import "./cart.scss";

function Cart() {

    //const json = require("../data/fooddata.json");
    //const items = json.data.slice(5, 8);

    const options = [
        {value: 'cash', label: 'Cash'},
        {value: 'card', label: 'Card'},
        {value: 'paypal', label: 'Paypal'}
    ]

    const colourStyles = {
        option: (styles, {isFocused, isSelected}) => ({
            ...styles,
            backgroundColor: isFocused ? "#EED5EE" : isSelected ? "#863788" : null,
            color: "#212121"
        }),
        control: (styles, {isFocused}) => ({
            ...styles,
            border: isFocused ?  '1px solid #E040FB' : '1px solid hsl(0, 0%, 80%)',
            boxShadow: isFocused ? 0 : 0,
            '&:hover': {
                border: isFocused ? '1px solid #E040FB' : '1px solid hsl(0, 0%, 80%)'
            }
        })
    }

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const handleChangeSelect = selectedOption => setSelectedOption(selectedOption);

    const [checkedState, setCheckedState] = useState(false);
    const handleChangeChecked = (event) => {
        setCheckedState(event.target.checked);
    };

    return (
        <form name="cart-form" className="container-fluid cart-form" action="#">

            <div className="container-sm justify-content-center">
                <CartOrderTable/>
            </div>

            <div className="container-sm justify-content-center">
                <div className="row">
                    <div className="col-sm">
                        <h3>Delivery information</h3>
                        <div className="cart-inputs">
                            <Input type="text" name="name" id="name" labelContent="Name"/>
                            <Input type="phone" name="phone" id="phone" labelContent="Phone"/>
                            <Input type="address" name="address" id="address" labelContent="Address"/>
                        </div>
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
                    <div className="col-sm">
                        <h3>Payment method</h3>
                        <div className="select-payment-container">
                            <Select
                                options={options}
                                className="select-payment"
                                value={selectedOption}
                                onChange={handleChangeSelect}
                                styles={colourStyles}
                            />
                        </div>
                        {JSON.stringify(selectedOption) === JSON.stringify(options[0]) && <div className="change-part">
                            {checkedState &&
                            <Input type="number" name="change" id="change" labelContent="Amount of cash for change"/>}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checkedState}
                                        name={"checkedChange"}
                                        onChange={handleChangeChecked}
                                        style={{
                                            color: "#863788",
                                        }}
                                    />
                                }
                                label={<Typography style={{color: '#212121'}}>Need change?</Typography>}
                            />
                        </div>}
                        <h3>Comments</h3>
                        <div className="cart-info">
                            <textarea className="cart-comment" id="order-comment" rows="2"
                                      placeholder="Write your comment here"/>
                        </div>
                    </div>
                </div>
            </div>

            <button className="btn form-btn cart-btn">Confirm/Pay</button>
        </form>
    )
}

export default Cart;
