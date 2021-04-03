import React, {useState} from "react";
import {ReactComponent as MinusIcon} from "../assets/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../assets/icons/plus.svg";
import "./counter.scss";

function AmountCounter(props) {

    const {amountInitial, minValue, maxValue, onChange} = props;
    const [amount, setAmount] = useState(amountInitial);

    const increment = () => {
        const tempResult = amount === maxValue ? maxValue : amount + 1;
        setAmount(tempResult);
    }

    const decrement = () => {
        const tempResult = amount === minValue ? minValue : amount - 1;
        setAmount(tempResult);
    }

    onChange(amount);

    return (
        <div className="counter">
            <button type="button" onClick={decrement} className="icon-button"><MinusIcon/></button>
            <span className="item-amount">{amount}</span>
            <button type="button" onClick={increment} className="icon-button"><PlusIcon/></button>
        </div>
    );
}

export default AmountCounter;
