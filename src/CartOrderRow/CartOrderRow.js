import React, {useState} from "react";
import AmountCounter from "../AmountCounter/AmountCounter";
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
            <th scope="row" className="align-middle item-image">
                <img src={item.image}/>
            </th>
            <td className="align-middle text-center">
                {item.name}
            </td>
            <td className="align-middle">
                <AmountCounter amount={amount} onChange={changeAmount}/>
            </td>
            <td className="align-middle text-center action-item">
                {item.price*amount}$
            </td>
        </tr>
    )
}

export default CartOrderRow;
