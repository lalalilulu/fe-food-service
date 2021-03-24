import React from "react";
import {Link} from "react-router-dom";
import Input from "../Input/Input";
import "../Autorisation/forms.scss";


function ItemForm({match}) {

    const items = require("../data/fooddata.json").data;
    const item = Array.from(items).find(dish => dish.id === match.params.id);

    return (
        <div className="container-md justify-content-center">
            <form>
                <div className="modalHeader">
                    <h2 className="modal-title text-center w-100 font-weight-bold">Edit {item.name}</h2>
                </div>
                <div className="modal-body text-center">
                    <div className="md-form md-5">
                        <Input type="text" name="name" id="name" labelContent="Enter a dish name"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="text" name="description" id="description" labelContent="Enter a dish description"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="text" name="ingredients" id="ingredients" labelContent="Enter dish ingredients by comma"/>
                    </div>
                    <div className="md-form md-5">
                        <Input type="number" name="price" id="price" labelContent="Enter a dish price"/>
                    </div>
                </div>

                <div className="modal-footer border-white justify-content-center">
                    <Link to={`/menu/${item.id}`} className="btn btn-primary form-btn">Preview</Link>
                    <Link to={`/`} className="btn btn-primary form-btn">Add to the menu</Link>
                </div>
            </form>

            <p className="form-text text-center">Сhanged your mind? <a href="/" className="signLink">Menu Page</a></p>
        </div>
    );
}

export default ItemForm;
