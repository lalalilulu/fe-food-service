import React from 'react';
import {ReactComponent as LogoIcon} from "../../assets/icons/delivery-truck.svg";
import {ReactComponent as FacebookIcon} from "../../assets/icons/facebook.svg";
import {ReactComponent as YoutubeIcon} from "../../assets/icons/youtube.svg";
import {ReactComponent as InstaIcon} from "../../assets/icons/instagram.svg";
import './style.scss';

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
                    <a href="/">All Menu</a>
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
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/cart">Cart</a>
                </li>
                <li>
                    <a href="/newOrders">Orders</a>
                </li>
                <li>
                    <div className="border-line"/>
                </li>
                <li>
                    <a href="/receivedOrders">Received Orders (Admin)</a>
                </li>
                <li>
                    <a href="/deliveries">Deliveries (Courier)</a>
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
