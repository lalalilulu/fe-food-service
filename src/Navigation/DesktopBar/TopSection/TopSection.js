import React, {useState} from 'react';
import {ReactComponent as CartIcon} from "../../../assets/icons/shopping-cart.svg";
import {ReactComponent as LineIcon} from "../../../assets/icons/vertical-line.svg";
import {ReactComponent as ArrowIcon} from "../../../assets/icons/arrow-down.svg";
import './style.scss';
import DropdownMenu from "../../../DropdownMenu/DropdownMenu";
import NavItem from "../../NavItem/NavItem";
import {ReactComponent as UserIcon} from "../../../assets/icons/user.svg";

const TopSection = () => {

    return (
        <div className="row leftSideBar-topDesktopSection">
            <div className="row justify-content-md-end right-section-desktop-container">
                <div className="row user-settings">
                    <div className="username">Username</div>
                    <NavItem icon={<ArrowIcon className="icon"/>} link={"#"}>
                        <DropdownMenu/>
                    </NavItem>
                </div>
                <div className="not-authorized">
                    <a href="/signin" className="nav-button">Войти</a>
                </div>
                <a href="/cart" className="row cart-link-button">
                    <CartIcon className="icon"/>
                    <div className="amount">3</div>
                    <LineIcon className="icon"/>
                    <div className="order-sum">89$</div>
                </a>
            </div>
        </div>
    );
};

export default TopSection;
