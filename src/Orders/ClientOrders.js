import React, {useState} from "react";
import {useSelector} from "react-redux";
import {orderConstants} from "../_constants/OrderConstants";
import './style.scss';

function ClientOrders() {

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

    const currentUser = useSelector(state => state.authentication.user);
    const orders = useSelector(state => state.orders.orders);
    const userOrders = orders.filter(order => order.clientId === currentUser.id);

    const renderInProgressOrders = () => {
        if (userOrders) {
            return Object.keys(userOrders).map((val) => {
                if (userOrders[val].status === orderConstants.PENDING_STATUS || userOrders[val].status === orderConstants.IN_PROGRESS_STATUS) {
                    return (
                        <div className="container-order border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={userOrders[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">#{userOrders[val].id}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span className="text-uppercase text-bright order-req-status">{userOrders[val].deliveryDate + ' ' + userOrders[val].deliveryTime}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <p className="col-12">Address: {userOrders[val].address}</p>
                                <p className="col-12">Phone: {userOrders[val].phone}</p>
                                <p className="col-12">Name: {userOrders[val].name}</p>
                            </div>
                            {
                                Object.keys(userOrders[val].cartItems).map((val2) => {
                                    return (
                                        <div className="row mb-3" key={val2.id}>
                                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                <img style={{width: "70px", height: "70px"}}
                                                     src={userOrders[val].cartItems[val2].item.image}/>
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                <h6 className="">{userOrders[val].cartItems[val2].item.name}</h6>
                                                <p className="mb-1">
                                                    <small>{userOrders[val].cartItems[val2].item.ingredients.join(", ")}</small></p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                                <span style={{fontSize: "14px"}}
                                                      className="mx-3"><b>{userOrders[val].cartItems[val2].price}$</b></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4">Total Price:</b><span
                                        style={{fontSize: '1.1rem'}}>$.{userOrders[val].total}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    const renderDeliveredOrders = () => {
        if (userOrders) {
            return Object.keys(userOrders).map((val) => {
                if (userOrders[val].status === orderConstants.DELIVERED_STATUS) {
                    return (
                        <div className="container-order border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={userOrders[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">#{userOrders[val].id}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span className="text-uppercase text-bright order-req-status">{userOrders[val].deliveryDate + ' ' + userOrders[val].deliveryTime}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <p className="col-12">Address: {userOrders[val].address}</p>
                                <p className="col-12">Phone: {userOrders[val].phone}</p>
                                <p className="col-12">Name: {userOrders[val].name}</p>
                            </div>
                            {
                                Object.keys(userOrders[val].cartItems).map((val2) => {
                                    return (
                                        <div className="row mb-3" key={val2.id}>
                                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                <img style={{width: "70px", height: "70px"}}
                                                     src={userOrders[val].cartItems[val2].item.image}/>
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                <h6 className="">{userOrders[val].cartItems[val2].item.name}</h6>
                                                <p className="mb-1">
                                                    <small>{userOrders[val].cartItems[val2].item.ingredients.join(", ")}</small></p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                                <span style={{fontSize: "14px"}}
                                                      className="mx-3"><b>{userOrders[val].cartItems[val2].price}$</b></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4">Total Price:</b><span
                                        style={{fontSize: '1.1rem'}}>$.{userOrders[val].total}</span></p>
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
                                        {renderInProgressOrders()}
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

export default ClientOrders;
