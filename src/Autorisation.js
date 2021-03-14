import React from "react";
import logo from "./assets/images/food-logo.png";
import facebook from "./assets/icons/facebook-logo.png";
import vk from "./assets/icons/vk-social-logotype.png";
import googlePlus from "./assets/icons/google-plus-social-logotype.png";

export function Autorisation() {
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
                <p className="input-error">Error: Some error occurred. Please try again later</p>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
}
