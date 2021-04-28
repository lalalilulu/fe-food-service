import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {menuActions} from "../_actions/MenuActions";
import Select from "react-select";
import ImageLoader from "../ImageLoader/ImageLoader";
import "../UserForms/style.scss";
import "./style.scss";


function ItemForm({match}) {

    const items = useSelector(state => state.menu.items);
    const currentItem = useSelector(state => state.menu.currentItem);
    const menuItem = currentItem && currentItem.id === match.params.id ? currentItem : items.find(dish => dish.id === match.params.id);

    const [item, setItem] = useState({
        ...menuItem
    });

    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setItem(item => ({...item, [name]: value}));
    }

    const options = [
        {value: 'soups', label: 'soups'},
        {value: 'pastas', label: 'pastas'},
        {value: 'pizzas', label: 'pizzas'},
        {value: 'burgers', label: 'burgers'},
        {value: 'desserts', label: 'desserts'}
    ]

    const colourStyles = {
        option: (styles, {isFocused, isSelected}) => ({
            ...styles,
            backgroundColor: isFocused ? "#EED5EE" : isSelected ? "#863788" : null,
            color: "#212121"
        }),
        control: (styles, {isFocused}) => ({
            ...styles,
            border: isFocused ? '1px solid #E040FB' : '1px solid hsl(0, 0%, 80%)',
            boxShadow: isFocused ? 0 : 0,
            '&:hover': {
                border: isFocused ? '1px solid #E040FB' : '1px solid hsl(0, 0%, 80%)'
            }
        })
    }

    const [selectedCategory, setSelectedCategory] = useState(options.find(x => x.value === item.category));

    function handleChangeSelect(selectedOption) {
        setSelectedCategory(selectedOption);
        setItem(item => ({...item, 'category': selectedOption.value}));
    }

    return (
        <div className="container-md justify-content-center">

            <div className="modalHeader">
                <h2 className="modal-title text-center w-100 font-weight-bold">Edit {item.name}</h2>
            </div>
            <div className="modal-body text-center">
                <div className="md-form md-5">
                    <Input type="text" name="name" value={item.name} id="name" onChange={handleChange}
                           labelContent="Dish name"/>
                    <Input type="text" name="description" value={item.description} id="description"
                           onChange={handleChange} labelContent="Dish description"/>
                    <Input type="text" name="image" value={item.image} id="image" onChange={handleChange}
                           labelContent="Link to image"/>
                    <Input type="text" name="ingredients" value={item.ingredients} id="ingredients"
                           onChange={handleChange} labelContent="Dish ingredients (enter by comma)"/>
                    <Input type="number" name="price" value={item.price} id="price" onChange={handleChange}
                           labelContent="Dish price"/>
                    <Select
                        options={options}
                        className="select-category"
                        value={selectedCategory}
                        onChange={handleChangeSelect}
                        styles={colourStyles}
                    />
                    <div className="md-form py-3 text-left">
                        <p className="preview-text">Image preview:</p>
                        <ImageLoader src={item.image} loaderWidthHeight={200}/>
                    </div>
                </div>
            </div>

            <div className="modal-footer border-white justify-content-center">
                <Link to={`/menu/preview/${item.id}`} onClick={() => dispatch(menuActions.previewItem(item))} className="btn btn-primary form-btn">Preview</Link>
            </div>

            <p className="form-text text-center">Сhanged your mind? <Link to="/menu"
                                                                          onClick={() => dispatch(menuActions.resetEditing())}
                                                                          className="custom-link">Menu Page</Link></p></div>
    );
}

export default ItemForm;
