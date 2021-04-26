import React, {useState} from "react";
import Input from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../_actions/UserActions";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {isCorrectEmail, isNumeric} from "../_helpers/Utils";
import "../Autorisation/forms.scss";

function Profile() {

    const currentUser = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        phone: currentUser.phone,
        address: currentUser.address ? currentUser.address : '',
        role: currentUser.role,
        token: currentUser.token
    });

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
        } else if (!isNumeric(user.phone)) {
            toast.error("Please enter only numeric characters for phone field");
        }
        else if (!isCorrectEmail(user.email)) {
            toast.error("Please enter correct email address");
        } else {
            dispatch(userActions.update(user));
        }
    }

    return (
        <div className="container-md justify-content-center form-container">
            <form onSubmit={handleSubmit}>
                <div className="modalHeader">
                    <h2 className="modal-title text-center w-100 font-weight-bold">Profile</h2>
                </div>
                <div className="modal-body text-center">
                    <div className="md-form md-5">
                        <Input type="text" name="name" value={user.name} id="name" onChange={handleChange} labelContent="Name Surname"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="email" name="email" value={user.email} id="email" onChange={handleChange} labelContent="Email"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="phone" name="phone" value={user.phone} id="phone" onChange={handleChange} labelContent="Phone"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="address" name="address" value={user.address} id="address" onChange={handleChange} labelContent="Address"/>
                    </div>
                </div>

                <div className="modal-footer border-white justify-content-center">
                    <button type="submit" className="btn btn-primary form-btn">Update</button>
                </div>
            </form>

            <p className="form-text text-center">Ready to make an order? <Link to="/" className="signLink">Menu Page</Link></p>
        </div>
    );
}

export default Profile;
