import React from 'react';
import {ReactComponent as LogoIcon} from "../../assets/icons/delivery-truck.svg";
import {ReactComponent as FacebookIcon} from "../../assets/icons/facebook.svg";
import {ReactComponent as YoutubeIcon} from "../../assets/icons/youtube.svg";
import {ReactComponent as InstaIcon} from "../../assets/icons/instagram.svg";
import './style.scss';
import {Link} from "react-router-dom";

const MenuWrapper = () => {
    return (
            <ul className="leftSideBar-leftSection-menuWrapper">
                <li>
                    <LogoIcon className="logo-icon"/>
                </li>
                <li>
                    <div className="border-logo-line"/>
                </li>
                <li>
                    <Link to={'/'}>All Menu</Link>
                </li>
                <li>
                    <a href="/#soups">Soups</a>
                </li>
                <li>
                    <a href="/#pastas">Pastas</a>
                </li>
                <li>
                    <a href="/#pizzas">Pizzas</a>
                </li>
                <li>
                    <a href="/#burgers">Burgers</a>
                </li>
                <li>
                    <a href="/#desserts">Desserts</a>
                </li>
                <li>
                    <div className="border-line"/>
                </li>
                <li>
                    <Link to={'/profile'}>Profile</Link>
                </li>
                <li>
                    <Link to={'/cart'}>Cart</Link>
                </li>
                <li>
                    <Link to={'/newOrders'}>Orders</Link>
                </li>
                <li>
                    <div className="border-line"/>
                </li>
                <li>
                    <Link to={'/receivedOrders'}>Received Orders (Admin)</Link>
                </li>
                <li>
                    <Link to={'/deliveries'}>Deliveries (Courier)</Link>
                </li>
                <li>
                    <div className="border-line"/>
                </li>
                <li>
                    <div className="social-networks">
                        <a href="https://www.facebook.com/buzzfeedtasty/" target="_blank" rel="noreferrer"><FacebookIcon className="icon-social"/></a>
                        <a href="https://www.youtube.com/channel/UCJFp8uSYCjXOMnkUyb3CQ3Q" target="_blank" rel="noreferrer"><YoutubeIcon className="icon-social"/></a>
                        <a href="https://www.instagram.com/buzzfeedtasty" target="_blank" rel="noreferrer"><InstaIcon className="icon-social"/></a>
                    </div>
                </li>
                <li>
                    <div className="border-line"/>
                </li>
            </ul>
    );
};

export default MenuWrapper;
