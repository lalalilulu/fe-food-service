import React, {useContext} from 'react';
import BurgerButton from '../BurgerButton/BurgerButton';
import {LeftSideBarContext} from '../LeftSideBar';
import {ReactComponent as CartIcon} from "../../../assets/icons/shopping-cart.svg";
import {ReactComponent as LineIcon} from "../../../assets/icons/vertical-line.svg";
import {ReactComponent as ArrowIcon} from "../../../assets/icons/arrow-down.svg";
import './style.scss';

const TopSection = () => {
    const {setIsShowSidebar} = useContext(LeftSideBarContext);
    return (
        <div className="row leftSideBar-topSection">
            <BurgerButton
                onClick={() => setIsShowSidebar(true)}
            />
            <div className="row justify-content-md-center right-section-container">
                <div className="col row user-settings">
                    <div className="username">Username</div>
                    <ArrowIcon className="icon"/>
                </div>
                <div className="col not-authorized">
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
