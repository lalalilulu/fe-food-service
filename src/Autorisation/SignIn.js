import React from "react";
import Input from "../Input/Input";
import "./forms.scss";
import facebook from "../assets/icons/facebook-logo.png";
import vk from "../assets/icons/vk-social-logotype.png";
import googlePlus from "../assets/icons/google-plus-social-logotype.png";

function SignIn() {
    return (

        <div className="container-md justify-content-center form-container">
            <form>
                <div className="modalHeader">
                    <h2 className="modal-title text-center w-100 font-weight-bold">Sign In</h2>
                </div>
                <div className="modal-body text-center">
                    <div className="md-form md-5">
                        <Input type="text" name="emailOrPhone" id="emailOrPhone" labelContent="Enter email or phone"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="password" name="pass" id="pass" labelContent="Password"/>
                    </div>
                </div>

                <div className="modal-footer border-white justify-content-center">
                    <button className="btn btn-primary form-btn">Sign in</button>
                </div>

                <div className="login-social-networks">
                    <img className="social-n" src={facebook} alt="Facebook"/>
                    <img className="social-n" src={vk} alt="VK"/>
                    <img className="social-n" src={googlePlus} alt="G+"/>
                </div>

                <p className="form-text text-center">New Here? <a href="/signup" className="signLink">Create a free account</a></p>
            </form>
        </div>
    );
}

export default SignIn;
