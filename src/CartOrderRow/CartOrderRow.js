import React, {useState} from "react";
import AmountCounter from "../AmountCounter/AmountCounter";
import {ReactComponent as DeleteIcon} from "../assets/icons/trash-bin.svg";
import "./orderRow.scss";

function CartOrderRow(props) {

    const {item, costsArray, index, onChange} = props;

    const [amount, setAmount] = useState(1);
    const changeAmount = (amount) => {
        costsArray[index] = item.price*amount;
        setAmount(amount);
    }

    onChange(costsArray.reduce((accumulator, currentItem) => accumulator + currentItem));

    return (
        <tr>
            <td className="item-image">
                <img src={item.image}/>
            </td>
            <td className="align-middle text-center">
                {item.name}
            </td>
            <td className="align-middle">
                <AmountCounter amountInitial={amount} minValue={0} maxValue={100} onChange={changeAmount}/>
            </td>
            <td className="align-middle text-center action-item">
                {item.price*amount}$
            </td>
            <td className="align-middle text-center action-item delete-icon">
                <button type="button" className="icon-button"><DeleteIcon/></button>
            </td>
        </tr>
    )
}

export default CartOrderRow;
