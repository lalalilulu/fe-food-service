import React from 'react';
import {useSelector} from 'react-redux';
import {ReactComponent as CartIcon} from "../../assets/icons/shopping-cart.svg";
import {ReactComponent as LineIcon} from "../../assets/icons/vertical-line.svg";
import {ReactComponent as UserIcon} from "../../assets/icons/user.svg";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import NavItem from "../NavItem/NavItem";
import {Link} from "react-router-dom";
import './style.scss';

const TopRightSection = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const total = useSelector(state => state.cart.total);

    return (
            <div className="col-xl-2 right-section-container">
                <div>
                    <NavItem icon={<UserIcon className="profile-icon"/>} link="#">
                        <DropdownMenu/>
                    </NavItem>
                </div>
                <Link to={`/cart`} className="row cart-link-button">
                    <CartIcon className="icon"/>
                    <div className="amount">{cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)}</div>
                    <LineIcon className="icon"/>
                    <div className="order-sum">{total}$</div>
                </Link>
            </div>
    );
}

export default TopRightSection;
