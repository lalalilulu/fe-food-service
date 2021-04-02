import React from 'react';
import {ReactComponent as CartIcon} from "../../assets/icons/shopping-cart.svg";
import {ReactComponent as LineIcon} from "../../assets/icons/vertical-line.svg";
import {ReactComponent as UserIcon} from "../../assets/icons/user.svg";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import NavItem from "../NavItem/NavItem";
import './style.scss';

const TopRightSection = () => {
    return (
            <div className="col-xl-2 right-section-container">
                <div>
                    <NavItem icon={<UserIcon className="profile-icon"/>} link="#">
                        <DropdownMenu/>
                    </NavItem>
                </div>
                <a href="/cart" className="row cart-link-button">
                    <CartIcon className="icon"/>
                    <div className="amount">3</div>
                    <LineIcon className="icon"/>
                    <div className="order-sum">89$</div>
                </a>
            </div>
    );
}

export default TopRightSection;
