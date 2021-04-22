import React, {useEffect, useState} from "react";
import Input from "../Input/Input";
import facebook from "../_assets/icons/facebook-logo.png";
import vk from "../_assets/icons/vk-social-logotype.png";
import googlePlus from "../_assets/icons/google-plus-social-logotype.png";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router";
import {userActions} from "../_actions/UserActions";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import "./forms.scss";

function SignIn() {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const { email, password } = inputs;
    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!email) {
            toast.error("Email is required");
        }
        if (!password) {
            toast.error("Password is required");
        }
        else {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/menu" } };
            dispatch(userActions.login(email, password, from));
        }
    }

    return (
        <div className="container-md justify-content-center form-container">
            <form onSubmit={handleSubmit}>
                <div className="modalHeader">
                    <h2 className="modal-title text-center w-100 font-weight-bold">Sign In</h2>
                </div>
                <div className="modal-body text-center">
                    <div className="md-form md-5">
                        <Input type="email" name="email" value={inputs.email} id="email" onChange={handleChange} labelContent="Enter email"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="password" name="password" value={inputs.password} id="password" onChange={handleChange} labelContent="Password"/>
                    </div>
                </div>

                <div className="modal-footer border-white justify-content-center">
                    <button type="submit" className="btn btn-primary form-btn">Sign in</button>
                </div>

                <div className="login-social-networks">
                    <img className="social-n" src={facebook} alt="Facebook"/>
                    <img className="social-n" src={vk} alt="VK"/>
                    <img className="social-n" src={googlePlus} alt="G+"/>
                </div>

                <p className="form-text text-center">New Here? <Link to="/signup" className="signLink">Create a free account</Link></p>
            </form>
        </div>
    );
}

export default SignIn;
