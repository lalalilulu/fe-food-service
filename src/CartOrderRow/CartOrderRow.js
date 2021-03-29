import React, {useState} from "react";
import AmountCounter from "../AmountCounter/AmountCounter";
import "./orderRow.scss";

function CartOrderRow(props) {

    const [amount, setAmount] = useState(1);
    const changeAmount = (amount) => {
        setAmount(amount);
    }

    //props.onChange(props.item.price*amount);

    return (
        <tr>
            <th scope="row" className="align-middle item-image">
                <img src={props.item.image}/>
            </th>
            <td className="align-middle text-center">
                {props.item.name}
            </td>
            <td className=" align-middle text-center">
                <AmountCounter amount={amount} onChange={changeAmount}/>
            </td>
            <td className="align-middle text-center action-item">
                {props.item.price*amount}$
            </td>
        </tr>
    )
}

export default CartOrderRow;
