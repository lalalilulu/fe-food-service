import React from 'react';
import {ReactComponent as LogoIcon} from "../../../assets/icons/delivery-truck.svg";
import {ReactComponent as FacebookIcon} from "../../../assets/icons/facebook.svg";
import {ReactComponent as YoutubeIcon} from "../../../assets/icons/youtube.svg";
import {ReactComponent as InstaIcon} from "../../../assets/icons/instagram.svg";
import './style.scss';

const LeftSection = () => {
    return (
        <div className="leftSideBar-leftDesktopSection">
            <ul className="leftSideBar-leftSection-menuWrapper">
                <li>
                    <LogoIcon className="logo-icon"/>
                </li>
                <li>
                    <div className="border-line"/>
                </li>
                <li>
                    <a href="/">All Menu</a>
                </li>
                <li>
                    <a href="/">Soups</a>
                </li>
                <li>
                    <a href="/">Pastas</a>
                </li>
                <li>
                    <a href="/">Pizzas</a>
                </li>
                <li>
                    <a href="/">Burgers</a>
                </li>
                <li>
                    <a href="/">Desserts</a>
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
                        <a href="https://www.facebook.com/buzzfeedtasty/" target="_blank"><FacebookIcon className="icon-social"/></a>
                        <a href="https://www.youtube.com/channel/UCJFp8uSYCjXOMnkUyb3CQ3Q" target="_blank"><YoutubeIcon className="icon-social"/></a>
                        <a href="https://www.instagram.com/buzzfeedtasty" target="_blank"><InstaIcon className="icon-social"/></a>
                    </div>
                </li>
                <li>
                    <div className="border-line"/>
                </li>
            </ul>
        </div>
    );
};

export default LeftSection;
