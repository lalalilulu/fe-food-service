import React from "react";
import { Link } from "react-router-dom";
import "./styles/profile.scss";

function Profile() {
    return (
        <div className="profile-container">
            <div className="modalHeader">
                <Link to="/dashboard" className="return-btn"/>
                <h2>My Profile</h2>
            </div>
            <form name="update-profile-form" className="update-profile-form" action="#" method="post">
                <h3>Key information</h3>
                <div className="profile-info">
                    <input name="name" type="text" className="profile-input" defaultValue="Ivan Ivanov"/>
                    <input name="email" type="email" className="profile-input" defaultValue="ivanov@gmail.com"/>
                    <input name="phone" type="tel" className="profile-input" defaultValue="+7(931)678-57-57"/>
                    <input name="address" type="text" className="profile-input" defaultValue="St. Petersburg, 13 Liniya V.O. 14"/>
                </div>
                <h3>Payment Method</h3>
                <div className="profile-info">
                    <ul className="payment">
                        <li>
                            <input type="radio" value="card" id="card" name="payment-method" className="payment-method" defaultChecked={true}/>
                            <label className="payment-label" htmlFor="card">Card</label>
                        </li>
                        <li>
                            <input type="radio" value="paypal" id="paypal" name="payment-method" className="payment-method"/>
                            <label className="payment-label" htmlFor="paypal">Paypal</label>
                        </li>
                        <li>
                            <input type="radio" value="cash" id="cash" name="payment-method" className="payment-method"/>
                            <label className="payment-label" htmlFor="paypal">Cash</label>
                        </li>
                    </ul>
                </div>
                <button type="submit" className="btn profile-btn">Update</button>
            </form>
        </div>
    );
}

export default Profile;
