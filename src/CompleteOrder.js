import React from "react";
import {Link} from "react-router-dom";
import completePng from "./assets/images/purple-food.jpg";
import './styles/complete.scss';

function CompleteOrder() {
    return (
        <div className="order-container">
            <div className="modalHeader">
                <Link to="/dashboard" className="return-btn"/>
                <h2>Thank you</h2>
            </div>
            <div className="complete-info">
                <img className="completePng" src={completePng} alt="Dish"/>
                <p>We got your order!</p>
                <p> Our chefs and cooks start preparing it!</p>
                <button type="button" className="btn">OK</button>
            </div>

        </div>
    );
}

export default CompleteOrder;
