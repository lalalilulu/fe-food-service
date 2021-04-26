import React, {useState} from "react";
import Input from "../Input/Input";
import MenuContainer from "./MenuContainer";
import MenuPart from "./MenuPart";
import {useSelector} from "react-redux";
import {userConstants} from "../_constants/UserConstants";
import "./menu.scss";

function Menu() {

    const allItems = useSelector(state => state.menu.items);
    const publishedItems = useSelector(state => state.menu.publishedItems);
    const currentUser = useSelector(state => state.authentication.user);
    const menuItems = currentUser && currentUser.role === userConstants.ADMIN_ROLE ? allItems : publishedItems;

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    function handleChange(e) {
       setQuery(e.target.value);
        if (query && query.length > 0) {
            findItems();
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    const findItems = () => {
        const searchQuery = query.toLowerCase();
        setResult(menuItems.filter(item => Object.values(item).join(" ").toLowerCase().includes(searchQuery)).splice(0,10));
    }

    const isSearchInputEmpty = query === '';
    const isResultNotEmpty = result.length > 0;

    return (
        <div className="container-fluid menu-container">
            <div className="row search-row">
                <form role="search" onSubmit={handleSubmit}>
                    <Input type="search" name="search" id="search" labelContent="Search for favourite food" onChange={handleChange} value={query}/>
                </form>
            </div>
            {!isSearchInputEmpty && isResultNotEmpty && <MenuPart headerName="found items" items={result}/>}
            {!isSearchInputEmpty && !isResultNotEmpty && <MenuPart headerName="No results were found for your search. Try again"/>}
            {isSearchInputEmpty && <MenuContainer allItems={menuItems}/>}
        </div>
    );
}

export default Menu;
