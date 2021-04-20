import React, {useState} from "react";
import {TextField} from '@material-ui/core';
import Select from 'react-select';
import CartOrderTable from "../CartOrderTable/CartOrderTable";
import Input from "../Input/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import "./cart.scss";

function Cart() {

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

    const currentUser = useSelector(state => state.authentication.user);

    const [orderInputs, setOrderInputs] = useState({
        name: currentUser.name,
        phone: currentUser.phone,
        address: currentUser.address ? currentUser.address : ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setOrderInputs(orderInputs => ({ ...orderInputs, [name]: value }));
        console.log(orderInputs);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!orderInputs.name) {
            toast.error("Name is required");
        }
        if (!orderInputs.phone) {
            toast.error("Phone is required");
        }
        if (!orderInputs.address) {
            toast.error("Address is required");
        }
        else {

        }
    }


    return (
        <form name="cart-form" className="container-fluid cart-form" onSubmit={handleSubmit}>

            <div className="container-sm justify-content-center">
                <CartOrderTable/>
            </div>

            <div className="container-sm justify-content-center">
                <div className="row">
                    <div className="col-sm">
                        <h3>Delivery information</h3>
                        <div className="cart-inputs">
                            <Input type="text" name="name" value={orderInputs.name} id="name" onChange={handleChange} labelContent="Name"/>
                            <Input type="phone" name="phone" value={orderInputs.phone} id="phone" onChange={handleChange} labelContent="Phone"/>
                            <Input type="address" name="address" value={orderInputs.address} id="address" onChange={handleChange} labelContent="Address"/>
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

            <button type="submit" className="btn form-btn cart-btn">Confirm</button>

        </form>
    )
}

export default Cart;
