import React, {useState} from "react";
import Input from "../Input/Input";
import MenuContainer from "./MenuContainer";
import MenuPart from "./MenuPart";
import "./menu.scss";


function Menu() {

    const allItems = require("../data/fooddata.json").data;

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    const handleInput = (event) => {
       setQuery(event.target.value);
        if (query && query.length > 0) {
            findItems();
        }
    }

    const findItems = () => {
        const searchQuery = query.toLowerCase();
        setResult(allItems.filter(item => Object.values(item).join(" ").toLowerCase().includes(searchQuery)).splice(0,10));
        // setResult(allItems.filter(function(item) {
        //     const {name, category, ingredients} = item;
        //     return name.toLowerCase().includes(searchQuery) || category.toLowerCase().includes(searchQuery) }).splice(0,10));
    }

    const isSearchInputEmpty = query === '';
    const isResultNotEmpty = result.length > 0;

    return (
        <div className="container-fluid">
            <div className="row">
                <form role="search">
                    <Input type="search" name="search" id="search" labelContent="Search for favourite food" onInput={event => handleInput(event)} value={query}/>
                </form>
            </div>
            {!isSearchInputEmpty && isResultNotEmpty && <MenuPart headerName="found items" items={result}/>}
            {!isSearchInputEmpty && !isResultNotEmpty && <MenuPart headerName="No results were found for your search. Try again"/>}
            {isSearchInputEmpty && <MenuContainer allItems={allItems}/>}
        </div>
    );
}

export default Menu;
