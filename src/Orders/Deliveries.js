import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {orderConstants} from "../_constants/OrderConstants";
import './style.scss';
import {orderActions} from "../_actions/OrderActions";

function Deliveries() {

    const [tabState, setTabState] =
        useState({
            tab1: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
            tab2: "col-12 col-lg-4 col-md-4 text-center",
            tab1Content: true,
            tab2Content: false
        });

    const handleTabs = (e) => {
        if (e === "tab1") {
            setTabState({
                tab1: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
                tab2: "col-12 col-lg-4 col-md-4 text-center",
                tab1Content: true,
                tab2Content: false
            })
        } else if (e === "tab2") {
            setTabState({
                tab1: "col-12 col-lg-4 col-md-4 text-center",
                tab2: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
                tab1Content: false,
                tab2Content: true
            })
        }
    }

    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();

    const renderAssignedOrders = () => {
        if (orders) {
            return Object.keys(orders).map((val) => {
                if (orders[val].status === orderConstants.IN_PROGRESS_STATUS) {
                    return (
                        <div className="container-order border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={orders[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">#{orders[val].id}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span className="text-uppercase text-bright order-req-status">{orders[val].deliveryDate + ' ' + orders[val].deliveryTime}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <p className="col-12">Address: {orders[val].address}</p>
                                <p className="col-12">Phone: {orders[val].phone}</p>
                                <p className="col-12">Name: {orders[val].name}</p>
                                <p className="col-12">Payment Method: {orders[val].payment}</p>
                                <p className="col-12">Client's comment: {orders[val].comment}</p>
                            </div>
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4">Total Price:</b><span
                                        style={{fontSize: '1.1rem'}}>$.{orders[val].total}</span></p>
                                </div>
                            </div>
                            <div className="text-center mb-2">
                                <button className="btn order-btn" onClick={() => dispatch(orderActions.deliver(orders[val].id))}>Сonfirm delivery</button>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    const renderDeliveredOrders = () => {
        if (orders) {
            return Object.keys(orders).map((val) => {
                if (orders[val].status === orderConstants.DELIVERED_STATUS) {
                    return (
                        <div className="container-order border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={orders[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">#{orders[val].id}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span className="text-uppercase text-bright order-req-status">{orders[val].deliveryDate + ' ' + orders[val].deliveryTime}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <p className="col-12">Address: {orders[val].address}</p>
                                <p className="col-12">Phone: {orders[val].phone}</p>
                                <p className="col-12">Name: {orders[val].name}</p>
                                <p className="col-12">Payment Method: {orders[val].payment}</p>
                                <p className="col-12">Client's comment: {orders[val].comment}</p>
                            </div>
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4">Total Price:</b><span
                                        style={{fontSize: '1.1rem'}}>$.{orders[val].total}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    return (
        <div>
            <div style={{background: "#EBEDF3"}} className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1">
                            <div className="container">
                                <div className="row">
                                    <div className={tabState.tab1} onClick={() => handleTabs("tab1")}>
                                        <p className="order-req-tab-text">In Progress</p>
                                    </div>
                                    <div className={tabState.tab2} onClick={() => handleTabs("tab2")}>
                                        <p className="order-req-tab-text">Delivered</p>
                                    </div>
                                </div>
                                {tabState.tab1Content &&
                                < div className="row">
                                    <div className="col-12 bg-white p-4">
                                        {renderAssignedOrders()}
                                    </div>
                                </div>
                                }
                                {tabState.tab2Content && <div className="row">
                                    <div className="col-12 bg-white p-4">
                                        {renderDeliveredOrders()}
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deliveries;
