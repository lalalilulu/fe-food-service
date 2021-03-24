import React from "react";
import {ReactComponent as CartIcon} from "../assets/icons/shopping-cart.svg";
import {ReactComponent as UserIcon} from "../assets/icons/user.svg";
import {ReactComponent as LogoutIcon} from "../assets/icons/logout.svg";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./nav.scss";

function Nav() {
    return (
        <Navbar>
            <NavItem icon={<CartIcon/>} link={"/cart"} />
            <NavItem icon={<UserIcon/>} link={"#"}>
                <DropdownMenu/>
            </NavItem>
            <NavItem icon={<LogoutIcon/>} link={"/signin"} />
        </Navbar>
    );
}

export default Nav;
