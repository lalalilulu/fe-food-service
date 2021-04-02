import React, {useEffect, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";
import {ReactComponent as CogIcon} from "../assets/icons/configuration.svg";
import {ReactComponent as OrdersIcon} from "../assets/icons/list-orders.svg";
import {ReactComponent as UserLogInIcon} from "../assets/icons/user-login.svg";
import {ReactComponent as ArrowIcon} from "../assets/icons/left-arrow.svg";
import {ReactComponent as WatchIcon} from "../assets/icons/watch.svg";
import {ReactComponent as CheckIcon} from "../assets/icons/check-mark.svg";
import {ReactComponent as BoltIcon} from "../assets/icons/bolt.svg";
import {ReactComponent as DeliveryIcon} from "../assets/icons/delivery.svg";
import "./dropdown.scss";


function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight + 30;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
            </a>
        );
    }


    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem
                        leftIcon={<CogIcon />}>
                        <a href="/profile">Profile</a>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<OrdersIcon />}
                        goToMenu="orders">
                        Orders
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<UserLogInIcon />}>
                        <a href="/signin">LogIn/LogOut</a>
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'orders'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h3>Back to settings</h3>
                    </DropdownItem>
                    <DropdownItem leftIcon={<WatchIcon />}><a href="/newOrders">In Progress</a></DropdownItem>
                    <DropdownItem leftIcon={<CheckIcon />}><a href="/completedOrders">Completed</a></DropdownItem>
                    <hr className="dropdown-divider"/>
                    <DropdownItem leftIcon={<BoltIcon />}><a href="/receivedOrders">Received (Admin)</a></DropdownItem>
                    <hr className="dropdown-divider"/>
                    <DropdownItem leftIcon={<DeliveryIcon />}><a href="/deliveries">Deliveries (Сourier)</a></DropdownItem>
                </div>
            </CSSTransition>

        </div>
    );
}

export default DropdownMenu;
