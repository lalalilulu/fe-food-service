import React from "react";

function Button(props) {

    return (
        <button
            type={props.type}
            className={props.classes.join(" ")}>
            {props.buttonTitle}
        </button>

    );
}

export default Button;
