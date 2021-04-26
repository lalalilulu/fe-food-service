import React from "react";
import {useSelector} from "react-redux";
import {editDate} from "../_helpers/Utils";
import './style.scss';

function ClientTemplate(props) {

    const currentUser = useSelector(state => state.authentication.user);
    const allOrders = useSelector(state => state.orders.orders);
    const orders = allOrders.filter(order => order.clientId === currentUser.id);

    return (
        Object.keys(orders).map((val) => {
                if (orders[val].status === props.status || orders[val].status === props.status2) {
                    return (
                        <div className="container-order border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={orders[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">#{orders[val].id}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-sm-left">
                                    <span
                                        className="text-uppercase text-bright order-req-status">{orders[val].deliveryTime + ' / ' + editDate(orders[val].deliveryDate)}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <p className="col-12 order-info"><strong>Address:</strong> {orders[val].address}</p>
                                <p className="col-12 order-info"><strong>Phone:</strong> {orders[val].phone}</p>
                                <p className="col-12 order-info"><strong>Name:</strong> {orders[val].name}</p>
                                <p className="col-12 order-info"><strong>Left comment:</strong> {orders[val].comment}</p>
                                <p className="col-12 order-info"><strong>Payment method:</strong> {orders[val].payment}</p>
                            </div>
                            {
                                Object.keys(orders[val].cartItems).map((val2) => {
                                    return (
                                        <div className="row mb-3 ingredients-container" key={orders[val].cartItems[val2].id}>
                                            <div
                                                className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center order-image-container">
                                                <img className="order-image" src={orders[val].cartItems[val2].item.image}
                                                     alt=""/>
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-12">
                                                <h6>{orders[val].cartItems[val2].item.name + ' x ' + orders[val].cartItems[val2].amount}</h6>
                                                <p className="mb-1 order-ingredients">{orders[val].cartItems[val2].item.ingredients.join(", ")}</p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-12 px-0 text-right">
                                                <span
                                                    className="mx-3 order-item-price"><b>{orders[val].cartItems[val2].price}$</b></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4 order-item-price">Total Price:</b><span
                                        className="order-price">{orders[val].total}$</span></p>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return null;
                }
            }
        ));
}

export default ClientTemplate;
