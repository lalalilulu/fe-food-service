import React from "react";
import Input from "../Input/Input";
import "./forms.scss";

function SignUp() {
    return (
        <div className="container-md justify-content-center form-container">
            <form>
                <div className="modalHeader">
                    <h2 className="modal-title text-center w-100 font-weight-bold">Create an account</h2>
                    <p className="form-text text-center">Enter information to create your free account</p>
                </div>
                <div className="modal-body text-center">
                    <div className="md-form md-5">
                        <Input type="email" name="email" id="email" labelContent="Email"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="phone" name="phone" id="phone" labelContent="Phone"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="password" name="password1" id="password1" labelContent="Password"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="password" name="password2" id="password2" labelContent="Repeat password"/>
                    </div>
                </div>

                <div className="modal-footer border-white justify-content-center">
                    <button className="btn btn-primary form-btn">Continue</button>
                </div>

                <p className="form-text text-center">Already have an account? <a href="/signin" className="signLink">Sign In</a></p>
            </form>
        </div>
    );
}

export default SignUp;
