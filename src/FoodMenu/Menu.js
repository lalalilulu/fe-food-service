import React from "react";
import Filters from "../Filters/Filters";
import MenuList from "./MenuList";
import Input from "../Input/Input";
import "./menu.scss";


function Menu() {

    return (
        <div className="container-fluid">
            <div className="row">
                <Input type="text" name="search" id="search" labelContent="Search for favourite food"/>
            </div>
            <div className="row">
                <Filters/>
            </div>
            <div className="row">
                <MenuList/>
            </div>
        </div>
    );
}

export default Menu;
