import React from "react";
import "./menu.scss";

import CategoryItem from "./CategoryItem";
import {menuConstants} from "../_constants/MenuConstants";


function CategoryList(props) {

    return (
        <ul className="my-cards">
            {props.items.map((item) => (
                <li className={item.status === menuConstants.BLOCKED_STATUS || item.status === menuConstants.UNPUBLISHED_STATUS ? "my-card opacity50" : "my-card opacity100"} key={item.id}>
                    <CategoryItem id={item.id} item={item}/>
                </li>
            ))}
        </ul>
    );
}

export default CategoryList;
