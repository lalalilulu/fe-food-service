import React, {useContext} from 'react';
import {ReactComponent as LogoIcon} from "../../_assets/icons/delivery-truck.svg";
import {ReactComponent as FacebookIcon} from "../../_assets/icons/facebook.svg";
import {ReactComponent as YoutubeIcon} from "../../_assets/icons/youtube.svg";
import {ReactComponent as InstaIcon} from "../../_assets/icons/instagram.svg";
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {userConstants} from "../../_constants/UserConstants";
import './style.scss';
import {LeftSideBarContext} from "../MobileBar/LeftSideMobileBar";

const MenuWrapper = () => {

    const currentUser = useSelector(state => state.authentication.user);
    const {setIsShowSidebar} = useContext(LeftSideBarContext);
    return (
            <ul className="leftSideBar-leftSection-menuWrapper">
                <li>
                    <LogoIcon className="logo-icon"/>
                </li>
                <li>
                    <div className="border-logo-line"/>
                </li>
                <li>
                    <HashLink to={'/#top'} onClick={() => setIsShowSidebar(false)}>All Menu</HashLink>
                </li>
                <li>
                    <HashLink to="/#soups" onClick={() => setIsShowSidebar(false)}>Soups</HashLink>
                </li>
                <li>
                    <HashLink to="/#pastas" onClick={() => setIsShowSidebar(false)}>Pastas</HashLink>
                </li>
                <li>
                    <HashLink to="/#pizzas" onClick={() => setIsShowSidebar(false)}>Pizzas</HashLink>
                </li>
                <li>
                    <HashLink to="/#burgers" onClick={() => setIsShowSidebar(false)}>Burgers</HashLink>
                </li>
                <li>
                    <HashLink to="/#desserts" onClick={() => setIsShowSidebar(false)}>Desserts</HashLink>
                </li>
                <li>
                    <div className="border-line"/>
                </li>
                <li>
                    <Link to={'/profile'} onClick={() => setIsShowSidebar(false)}>Profile</Link>
                </li>
                <li>
                    <Link to={'/cart'} onClick={() => setIsShowSidebar(false)}>Cart</Link>
                </li>
                <li>
                    <Link to={'/orders'} onClick={() => setIsShowSidebar(false)}>Orders</Link>
                </li>
                {currentUser && currentUser.role === userConstants.ADMIN_ROLE &&
                <li>
                    <Link to={'/receivedOrders'} onClick={() => setIsShowSidebar(false)}>Received Orders</Link>
                </li>
                }
                {currentUser && currentUser.role === userConstants.COURIER_ROLE &&
                <li>
                    <Link to={'/deliveries'} onClick={() => setIsShowSidebar(false)}>Deliveries</Link>
                </li>
                }
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
