import React from "react";
import OrderAction from "./OrderAction";
import {ReactComponent as FeedbackIcon} from "../assets/icons/feedback.svg";
import {ReactComponent as ConfirmIcon} from "../assets/icons/confirm.svg";
import {ReactComponent as ContactIcon} from "../assets/icons/phone-call.svg";
import {ReactComponent as DeliveryIcon} from "../assets/icons/logistics-delivery-truck-in-movement.svg";
import {ReactComponent as RejectIcon} from "../assets/icons/reject.svg";
import {ReactComponent as DeleteIcon} from "../assets/icons/trash-bin.svg";
import "./orders.scss";

function OrderTable(props) {

    const {items, actions} = props;

    function chooseIcon(action) {
        switch (action) {
            case "delete":
                return <DeleteIcon/>
            case "contact":
                return <ContactIcon/>
            case "assign":
                return <DeliveryIcon/>
            case "confirm":
                return <ConfirmIcon/>
            case "giveFeedback":
                return <FeedbackIcon/>
            case "reject":
                return <RejectIcon/>
            default:
                return <DeleteIcon/>
        }
    }

    return (
        <table className="table table-hover custom-table">
            <thead>
            <tr>
                <th scope="col" className="text-center">Order Number</th>
                <th scope="col" className="text-center">Total cost</th>
                <th scope="col" className="text-center">Delivery Date&Time</th>
                <th scope="col" className="text-center">Available Actions</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <tr>
                    <th scope="row" className="text-center">
                        #{item.number}
                    </th>
                    <td className="text-center">
                        {item.cost}$
                    </td>
                    <td className="text-center">
                        {item.date}
                    </td>
                    <td className="text-center action-item">
                        {actions.map((action) => <OrderAction description={action.description} number={action.name + item.number} icon={chooseIcon(action.name)}/>)}
                    </td>
                </tr>
            ))}
            </tbody>

        </table>
    );
}

export default OrderTable;
