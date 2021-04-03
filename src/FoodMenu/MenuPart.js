import React from "react";
import CategoryList from "./CategoryList";
import {ReactComponent as ArrowIcon} from "../assets/icons/down-arrow.svg";
import {ReactComponent as DoubleArrowIcon} from "../assets/icons/double-up-arrow.svg";
import "./menu.scss";


function MenuPart(props) {

    const capitalize = function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
            <div>
                <div className="row row-header">
                    <a name={props.headerName}/>
                    <h3>{capitalize(props.headerName)}</h3>
                    <a href={props.pageLink}>
                        {props.arrowDown && <ArrowIcon className="arrow-button"/>}
                        {props.arrowUp && <DoubleArrowIcon className="arrow-button"/>}
                    </a>
                </div>
                {props.items && <CategoryList items={props.items}/>}
            </div>
    );
}

export default MenuPart;
