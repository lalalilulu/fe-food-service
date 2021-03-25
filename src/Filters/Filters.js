import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./filter.scss";
import Typography from "@material-ui/core/Typography";



function Filters() {

    const items = ["soups", "pastas", "pizzas", "burgers", "desserts"];

    const capitalize = function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const [state, setState] = React.useState({
        checked0: true,
        checked1: true,
        checked2: true,
        checked3: true,
        checked4: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <ul className="container-md filterItems">
            {items.map((item, index) => (
                <li key={item}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state["checked"+index]}
                                onChange={handleChange}
                                name={"checked"+index}
                                style ={{
                                    color: "#863788",
                                }}
                            />
                        }
                        label={<Typography style={{ color: '#212121'}}>{capitalize(item)}</Typography>}
                    />
                </li>
            ))}
        </ul>
    );
}

export default Filters;
