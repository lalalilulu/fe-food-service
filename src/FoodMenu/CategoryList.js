import React from "react";
import "./menu.scss";

import CategoryItem from "./CategoryItem";


function CategoryList(props) {

    return (
        <ul className="cards">
            {props.items.map((item) => (
                <li className="card" key={item.id}>
                    <CategoryItem id={item.id} item={item}/>
                </li>
            ))}
        </ul>
    );
}

export default CategoryList;
