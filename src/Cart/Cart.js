import React, {useState} from "react";
import {TextField} from '@material-ui/core';
import Select from 'react-select';
import CartOrderTable from "../CartOrderTable/CartOrderTable";
import Input from "../Input/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import {useSelector} from "react-redux";
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

    const [selectedPaymentOption, setSelectedPaymentOption] = useState(options[0]);
    const handleChangeSelect = selectedOption => setSelectedPaymentOption(selectedOption);

    const [checkedState, setCheckedState] = useState(false);
    const handleChangeChecked = (event) => {
        setCheckedState(event.target.checked);
    };

    const calculateInitialTime = () => {
        const today = new Date();
        const hours = today.getHours() + 1;
        return today.getMinutes() > 20 ?
            '' + hours + ':30' : '' + hours + ':00';
    }

    const [deliveryTime, setDeliveryTime] = useState(calculateInitialTime);
    const handleChangeTime = selectedValue => setDeliveryTime(selectedValue);

    const [comment, setComment] = useState('');
    const handleChangeComment = e => setComment(e.target.value);

    const cartItems = useSelector(state => state.cart.cartItems);
    const total = useSelector(state => state.cart.total);

    const currentUser = useSelector(state => state.authentication.user);

    const [orderInputs, setOrderInputs] = useState({
        name: currentUser.name,
        phone: currentUser.phone,
        address: currentUser.address ? currentUser.address : ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setOrderInputs(orderInputs => ({ ...orderInputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const today = new Date();

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
            const orderRequest = {
                cartItems,
                total,
                ...orderInputs,
                deliveryTime,
                payment: selectedPaymentOption.value,
                comment
            }
            console.log(orderRequest);
            toast.success("Your order request is processed. We have started preparing it");
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
                            defaultValue={deliveryTime}
                            onChange={handleChangeTime}
                            className="cart-time-picker"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 600, // 10 min
                            }}
                        />
                    </div>
                    <div className="col-sm">
                        <h3>Payment method</h3>
                        <div className="select-payment-container">
                            <Select
                                options={options}
                                className="select-payment"
                                value={selectedPaymentOption}
                                onChange={handleChangeSelect}
                                styles={colourStyles}
                            />
                        </div>
                        {JSON.stringify(selectedPaymentOption) === JSON.stringify(options[0]) && <div className="change-part">
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
                                      placeholder="Write your comment here" value={comment} onChange={handleChangeComment}/>
                        </div>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn form-btn cart-btn">Confirm</button>

        </form>
    )
}

export default Cart;
