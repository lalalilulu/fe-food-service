import React from "react";
import CategoryList from "./CategoryList";
import {ReactComponent as ArrowIcon} from "../assets/icons/down-arrow.svg";
import {ReactComponent as DoubleArrowIcon} from "../assets/icons/double-up-arrow.svg";
import "./menu.scss";


function MenuPart(props) {

    const {headerName, pageLink, arrowDown, arrowUp, items} = props;

    const capitalize = function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
            <div>
                <div className="row row-header">
                    <a name={headerName}/>
                    <h3>{capitalize(headerName)}</h3>
                    <a href={pageLink}>
                        {arrowDown && <ArrowIcon className="arrow-button"/>}
                        {arrowUp && <DoubleArrowIcon className="arrow-button"/>}
                    </a>
                </div>
                {items && <CategoryList items={items}/>}
            </div>
    );
}

export default MenuPart;
