import React from "react";
import Input from "../Input/Input";
import "../Autorisation/forms.scss";

function Profile() {

    return (
        <div className="container-md justify-content-center form-container">
            <form>
                <div className="modalHeader">
                    <h2 className="modal-title text-center w-100 font-weight-bold">Profile</h2>
                </div>
                <div className="modal-body text-center">
                    <div className="md-form md-5">
                        <Input type="text" name="name" id="name" labelContent="Name Surname"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="email" name="email" id="email" labelContent="Email"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="phone" name="phone" id="phone" labelContent="Phone"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="address" name="address" id="address" labelContent="Address"/>
                    </div>
                </div>

                <div className="modal-footer border-white justify-content-center">
                    <button className="btn btn-primary form-btn">Update</button>
                </div>
            </form>

            <p className="form-text text-center">Ready to make an order? <a href="/" className="signLink">Menu Page</a></p>
        </div>
    );
}

export default Profile;
