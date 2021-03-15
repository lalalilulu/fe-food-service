import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./assets/images/food-logo.png";
import facebook from "./assets/icons/facebook-logo.png";
import vk from "./assets/icons/vk-social-logotype.png";
import googlePlus from "./assets/icons/google-plus-social-logotype.png";
import './styles/autorisation.scss';

export function Autorisation() {

    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        console.log(e);
        if(validateInputs()) {
            history.push('/dashboard');
        } else {
            document.querySelector(".input-error").style.visibility = "visible";
        }
    }

    function validateInputs() {
        const telRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        const mailRegex = /^\S+@\S+\.\S+$/;
        const inputValue = document.querySelector("input").value;
        return telRegex.test(inputValue) || mailRegex.test(inputValue);
    }

    return (
        <div className="login-container">
            <img className="app-logo" src={logo} alt="Logo"/>
            <h1 className="login-title">Hungry?</h1>
            <form name="login-form" className="login-form" action="#" method="post">
                <input id="login" name="login" type="text" className="login-input" placeholder="Enter email or phone" required/>
                <div className="login-social-networks">
                    <img className="social-n" src={facebook} alt="Facebook"/>
                    <img className="social-n" src={vk} alt="VK"/>
                    <img className="social-n" src={googlePlus} alt="G+"/>
                </div>
                <p className="input-error">Please enter a valid phone number or email</p>
                <button type="submit" className="btn" onClick={handleClick}>Login</button>
            </form>
        </div>
    );
}
