import React, {useState} from "react";

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <span>
            <a href={props.link} className="icon" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </span>
    );
}

export default NavItem;
