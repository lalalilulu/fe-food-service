import React, {useState} from "react";
import {ReactComponent as MinusIcon} from "../assets/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../assets/icons/plus.svg";
import "./counter.scss";

function AmountCounter(props) {
    const [amount, setAmount] = useState(props.amount);

    const increment = () => {
        const tempResult = amount === 100 ? 100 : amount + 1;
        setAmount(tempResult);
    }

    const decrement = () => {
        const tempResult = amount === 1 ? 1 : amount - 1;
        setAmount(tempResult);
    }

    props.onChange(amount);

    return (
        <div className="counter">
            <button type="button" onClick={decrement} className="icon-button"><MinusIcon/></button>
            <span className="item-amount">{amount}</span>
            <button type="button" onClick={increment} className="icon-button"><PlusIcon/></button>
        </div>
    );
}

export default AmountCounter;
