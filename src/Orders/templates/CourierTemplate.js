import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {editDate} from "../../_helpers/Utils";
import '../style.scss';
import {orderActions} from "../../_actions/OrderActions";

function CourierTemplate(props) {

    const orders = useSelector(state => state.orders.orders);
    const dispatch = useDispatch();

    return (
        Object.keys(orders).map((val) => {
                if (orders[val].status === props.status) {
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
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4 order-item-price">Total Price:</b><span
                                        className="order-price">{orders[val].total}$</span></p>
                                </div>
                            </div>
                            <div className="text-center mb-2">
                                {props.showButton && <button className="btn order-btn" onClick={() => dispatch(orderActions.deliver(orders[val].id))}>Сonfirm delivery</button>}
                            </div>
                        </div>
                    )
                } else {
                    return null;
                }
            }
        ));
}

export default CourierTemplate;
