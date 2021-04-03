import React, {useState} from "react";
import CartOrderRow from "../CartOrderRow/CartOrderRow";
import "./cartOrderTable.scss";

function CartOrderTable(props) {

    const cartItems = [...props.items];
    const [total, setTotal] = useState(cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0));
    const costsArray = cartItems.map(item => item.price);
    const changeTotal = (total) => {
        console.log(costsArray);
        setTotal(total);
    }

    return (
        <table className="table table-hover custom-table">
            <thead>
            <tr>
                <th scope="col" className="image-header"/>
                <th scope="col" className="text-center">Dish</th>
                <th scope="col" className="text-center">Amount</th>
                <th scope="col" className="text-center">Cost</th>
                <th scope="col"/>
            </tr>
            </thead>
            <tbody>
            {cartItems.map((item, index) => (
                <CartOrderRow item={item} index={index} costsArray={costsArray} onChange={changeTotal}/>
            ))}
            <tr>
                <td className="image-column"/>
                <td/>
                <td className="text-center order-total">TOTAL</td>
                <td className="text-center order-total-price">{total}$</td>
                <td/>
            </tr>
            </tbody>
        </table>
    );
}

export default CartOrderTable;
