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
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userConstants} from "../_constants/UserConstants";
import "./dropdown.scss";


function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30)
    }, [])

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.authentication.user);

    function calcHeight(el) {
        const height = el.offsetHeight + 30;
        setMenuHeight(height);
    }

    function DropdownItem(props) {

        const {goToMenu, leftIcon, children} = props;

        return (
            <a href="#" className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
                <span className="icon-button">{leftIcon}</span>
                {children}
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
                        <Link to="/profile">Profile</Link>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<OrdersIcon />}
                        goToMenu="orders">
                        Orders
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<UserLogInIcon />}>
                        {!currentUser && <Link to="/signin">Sign In</Link>}
                        {currentUser && <Link to="/signin">Sign Out</Link>}
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
                    <DropdownItem leftIcon={<WatchIcon />}><Link to="/orders">In Progress</Link></DropdownItem>
                    <DropdownItem leftIcon={<CheckIcon />}><Link to="/completedOrders">Completed</Link></DropdownItem>
                    {currentUser && currentUser.role === userConstants.ADMIN_ROLE && <hr className="dropdown-divider"/> &&
                    <DropdownItem leftIcon={<BoltIcon />}><Link to="/receivedOrders">Received </Link></DropdownItem>}
                    {currentUser && currentUser.role === userConstants.COURIER_ROLE && <hr className="dropdown-divider"/> &&
                    <DropdownItem leftIcon={<DeliveryIcon />}><Link to="/deliveries">Deliveries </Link></DropdownItem>}
                </div>
            </CSSTransition>

        </div>
    );
}

export default DropdownMenu;
