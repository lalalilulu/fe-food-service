import React, {useState} from "react";

function NavItem(props) {
    const [open, setOpen] = useState(false);
    const {link, icon, children} = props;

    return (
        <span>
            <a href={link} className="icon" onClick={() => setOpen(!open)}>
                {icon}
            </a>
            {open && children}
        </span>
    );
}

export default NavItem;
