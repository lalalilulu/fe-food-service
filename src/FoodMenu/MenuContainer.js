import React from "react";
import MenuPart from "./MenuPart";


function MenuContainer(props) {

    const {allItems} = props;

    return (
        <div>
            <MenuPart headerName="soups" pageLink="#pastas" arrowDown="true"
                      items={allItems.filter(item => item.category === "soups")}/>
            <MenuPart headerName="pastas" pageLink="#pizzas" arrowDown="true"
                      items={allItems.filter(item => item.category === "pastas")}/>
            <MenuPart headerName="pizzas" pageLink="#burgers" arrowDown="true"
                      items={allItems.filter(item => item.category === "pizzas")}/>
            <MenuPart headerName="burgers" pageLink="#desserts" arrowDown="true"
                      items={allItems.filter(item => item.category === "burgers")}/>
            <MenuPart headerName="desserts" pageLink="#soups" arrowUp="true"
                      items={allItems.filter(item => item.category === "desserts")}/>
        </div>
    );
}

export default MenuContainer;
