import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import OrderItem from "./OrderItem";
import "./styles/profile.scss";

function Profile() {

    const items = require("./data/ordersdata.json").data;

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
                <h3>Order History</h3>
                <div className="outer-wrapper">
                    <div className="inner-wrapper">
                    {items.map((item) => (
                        <div data-tip={"Dishes: " + item.dishes.join(", ")} data-for={item.number} className="order-item">
                            <OrderItem number={item.number} date={item.date} status={item.status} cost={item.cost} />
                            <ReactTooltip id={item.number} type="info" place="bottom" backgroundColor="#7B1FA2" effect="float" event="mouseover" eventOff="mouseout"/>
                        </div>
                    ))}
                    </div>
                </div>
                <button type="submit" className="btn profile-btn">Update</button>
            </form>
        </div>
    );
}

export default Profile;
