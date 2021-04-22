import React from "react";
import CategoryList from "./CategoryList";
import {ReactComponent as ArrowIcon} from "../_assets/icons/down-arrow.svg";
import {ReactComponent as DoubleArrowIcon} from "../_assets/icons/double-up-arrow.svg";
import {HashLink} from "react-router-hash-link";
import "./menu.scss";


function MenuPart({headerName, pageLink, arrowDown, arrowUp, items}) {

    const capitalize = function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
            <div>
                <div id={headerName} className="row row-header">
                    <h3>{capitalize(headerName)}</h3>
                    <HashLink smooth to={pageLink}>
                        {arrowDown && <ArrowIcon className="arrow-button"/>}
                        {arrowUp && <DoubleArrowIcon className="arrow-button"/>}
                    </HashLink>
                </div>
                {items && <CategoryList items={items}/>}
            </div>
    );
}

export default MenuPart;
