import React from "react";
import {Link} from "react-router-dom";
import logo from "./assets/images/error.png";
import './styles/404.scss';

function NoMatchPage() {
    return (
        <div className="container-404">
            <div className="modalHeader">
                <Link to="/dashboard" className="return-btn"/>
                <h2>Not Found</h2>
            </div>
            <div className="error-info">
                <img className="error-png" src={logo} alt="The requested page cannot be found"/>
                <p>The requested page cannot be found. Please check the URL</p>
            </div>
        </div>
    );
}

export default NoMatchPage;
