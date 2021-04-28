import React from "react";
import "./style.scss";

function Input({type, id, name, value, onChange, labelContent}) {

    return (
        <span className={value !== "" ? "input input--hoshi input--filled" : "input input--hoshi"}>
			<input className="input__field input__field--hoshi"
				   type={type}
				   id={id}
				   name={name}
				   value={value}
				   onChange={onChange}
			/>
			<label className="input__label input__label--hoshi input__label--hoshi-color" htmlFor={id}>
				<span className="input__label-content input__label-content--hoshi">{labelContent}</span>
			</label>
        </span>
    );
}

export default Input;

