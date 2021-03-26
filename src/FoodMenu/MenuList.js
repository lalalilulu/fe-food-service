import React from "react";
import "./menu.scss";

import MenuItem from "./MenuItem";


function MenuList() {

    const items = require("../data/fooddata.json").data;
    //const choosedItems = [];
    //let count = 0;

    return (
        <ul className="cards">
            {items.map((item) => (
                <li className="card" key={item.id}>
                    <MenuItem id={item.id} image={item.image} name={item.name} description={item.description}
                              price={item.price}/>
                </li>
            ))}
        </ul>
    );
}

export default MenuList;
