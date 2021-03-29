import React, {useState} from "react";
import CartOrderRow from "../CartOrderRow/CartOrderRow";
import "./cartOrderTable.scss";

function CartOrderTable(props) {

    const [total, setTotal] = useState(props.items.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0));
    const changeTotal = (total) => {
        setTotal(total);
    }

    return (
        <table className="table table-hover custom-table">
            <thead>
            <tr>
                <th scope="col"/>
                <th scope="col" className="text-center">Dish</th>
                <th scope="col" className="text-center">Amount</th>
                <th scope="col" className="text-center">Cost</th>
            </tr>
            </thead>
            <tbody>
            {props.items.map((item) => (
                <CartOrderRow item={item} onChange={changeTotal}/>
            ))}
            <tr>
                <td/>
                <td/>
                <td className="text-center order-total">TOTAL</td>
                <td className="text-center order-total-price">{total}$</td>
            </tr>
            </tbody>
        </table>
    );
}

export default CartOrderTable;
