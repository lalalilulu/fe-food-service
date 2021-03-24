import React from "react";
import Filters from "../Filters/Filters";
import MenuList from "./MenuList";
import Input from "../Input/Input";
import "./menu.scss";


function Menu() {

    return (
        <div>
        <div className="container-md">
            <Input type="text" name="search" id="search" labelContent="Search for favourite food"/>
            <Filters/>
        </div>
        <div className="container-md">
            <MenuList/>
        </div>
        </div>
    );
}

export default Menu;
