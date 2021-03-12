import React from "react";
import "./styles/profile.scss";

export function ProfilePage() {
    return (
        <div className="profile-page">
            <a className="return-to-main-page"/>
            <h1>My Profile</h1>
            <form name="update-profile-form" className="update-profile-form" action="#" method="post">
                <h2>Key information</h2>
                <div className="profile-info">
                    <input name="name" type="text" className="profile-input-name" value="Ivan Ivanov"/>
                    <input name="email" type="email" className="profile-input" value="ivanov@gmail.com"/>
                    <input name="phone" type="tel" className="profile-input" value="+7(931)678-57-57"/>
                    <input name="address" type="text" className="profile-input" value="St. Petersburg, 13 Liniya V.O. 14"/>
                </div>
                <h2>Payment Method</h2>
                <div className="profile-info">
                    <ul className="payment">
                        <li>
                            <input type="radio" value="card" id="card" name="payment-method"/>
                            <label htmlFor="card">Card</label>
                        </li>
                        <li>
                            <input type="radio" value="paypal" id="paypal" name="payment-method"/>
                            <label htmlFor="paypal">Paypal</label>
                        </li>
                        <li>
                            <input type="radio" value="cash" id="cash" name="payment-method"/>
                            <label htmlFor="paypal">Cash</label>
                        </li>
                    </ul>
                </div>
                <button type="submit" className="btn">Update</button>
            </form>
        </div>
    );
}
