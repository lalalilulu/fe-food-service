import React, {useEffect, useState} from "react";
import Input from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../_actions/UserActions";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {isCorrectEmail, isNumeric} from "../_helpers/Utils";
import "./style.scss";
import {messageActions} from "../_actions/MessageActions";

function SignUp() {

    const [loading, setLoading] = useState(false);
    const notification = useSelector(state => state.notification);
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        password2: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if(notification.message) {
            setLoading(false);
            dispatch(messageActions.clear());
        }
    }, [notification.message, dispatch]);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!user.name) {
            toast.error("Name is required");
        }
        if (!user.email) {
            toast.error("Email is required");
        }
        if (!user.phone) {
            toast.error("Phone is required");
        }
        if (!user.password) {
            toast.error("Password is required");
        }
        if(!user.password2) {
            toast.error(" Password confirmation is required");
        }
        else if (!isNumeric(user.phone)) {
            toast.error("Please enter only numeric characters for phone field");
        }
        else if (!isCorrectEmail(user.email)) {
            toast.error("Please enter correct email address");
        }
        else if (user.password !== user.password2) {
            toast.error("Passwords must match");
        }
        else {
            setLoading(true);
            setTimeout(() => dispatch(userActions.register(user)), 50);
        }
    }


    return (
        <div className="container-md justify-content-center form-container">
            <form onSubmit={handleSubmit}>
                <div className="modalHeader">
                    <h2 className="modal-title text-center w-100 font-weight-bold">Create an account</h2>
                    <p className="form-text text-center">Enter information to create your free account</p>
                </div>
                <div className="modal-body text-center">
                    <div className="md-form md-5">
                        <Input type="text" name="name" value={user.name} id="name" onChange={handleChange} labelContent="Name"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="email" name="email" value={user.email} id="email" onChange={handleChange} labelContent="Email"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="phone" name="phone" value={user.phone} id="phone" onChange={handleChange} labelContent="Phone"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="password" name="password" value={user.password} id="password" onChange={handleChange} labelContent="Password"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="password" name="password2" value={user.password2} id="password2" onChange={handleChange} labelContent="Repeat password"/>
                    </div>
                </div>

                <div className="modal-footer border-white justify-content-center">
                    <button type="submit" className="btn btn-primary form-btn"
                    disabled={loading}>
                        {loading && <i className="fa fa-refresh fa-spin"/>} Continue
                    </button>
                </div>

                <p className="form-text text-center">Already have an account? <Link to="/signin" className="custom-link">Sign In</Link></p>
            </form>
        </div>
    );
}


export default SignUp;
