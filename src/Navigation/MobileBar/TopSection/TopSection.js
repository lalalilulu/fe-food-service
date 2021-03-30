import React, {useContext} from 'react';
import BurgerButton from '../BurgerButton/BurgerButton';
import {LeftSideBarContext} from '../LeftSideBar';
import {ReactComponent as CartIcon} from "../../../assets/icons/shopping-cart.svg";
import {ReactComponent as LineIcon} from "../../../assets/icons/vertical-line.svg";
import {ReactComponent as ArrowIcon} from "../../../assets/icons/arrow-down.svg";
import './style.scss';
import {ReactComponent as UserIcon} from "../../../assets/icons/user.svg";
import DropdownMenu from "../../../DropdownMenu/DropdownMenu";
import NavItem from "../../NavItem/NavItem";

const TopSection = () => {
    const {setIsShowSidebar} = useContext(LeftSideBarContext);
    return (
        <div className="row leftSideBar-topSection">
            <BurgerButton
                onClick={() => setIsShowSidebar(true)}
            />
            <div className="row right-section-container">
                <div>
                    <NavItem icon={<UserIcon className="mobile-icon"/>} link={"#"}>
                        <DropdownMenu/>
                    </NavItem>
                </div>
                <div className="not-authorized">
                    <a href="/signin" className="nav-button transparent">Войти</a>
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
