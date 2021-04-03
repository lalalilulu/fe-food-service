import React from "react";
import "./menu.scss";

import CategoryItem from "./CategoryItem";


function CategoryList(props) {

    return (
        <ul className="cards">
            {props.items.map((item) => (
                <li className="card" key={item.id}>
                    <CategoryItem id={item.id} image={item.image} name={item.name} description={item.description}
                                  price={item.price}/>
                </li>
            ))}
        </ul>
    );
}

export default CategoryList;
