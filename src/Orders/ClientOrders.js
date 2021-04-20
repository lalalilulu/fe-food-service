import React, {useState} from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ClientOrders(props) {

    const [tabState, setTabState] =
        useState({
            tab1: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
            tab2: "col-12 col-lg-4 col-md-4 text-center",
            tab3: "col-12 col-lg-4 col-md-4 text-center",
            tab1Content: true,
            tab2Content: false,
            tab3Content: false,
        });

    const handleTabs = (e) => {
        if (e === "tab1") {
            setTabState({
                tab1: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
                tab2: "col-12 col-lg-4 col-md-4 text-center",
                tab3: "col-12 col-lg-4 col-md-4 text-center",
                tab1Content: true,
                tab2Content: false,
                tab3Content: false,
            })
        } else if (e === "tab2") {
            setTabState({
                tab1: "col-12 col-lg-4 col-md-4 text-center",
                tab2: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
                tab3: "col-12 col-lg-4 col-md-4 text-center",
                tab1Content: false,
                tab2Content: true,
                tab3Content: false,
            })
        } else if (e === "tab3") {
            setTabState({
                tab1: "col-12 col-lg-4 col-md-4 text-center",
                tab2: "col-12 col-lg-4 col-md-4 text-center",
                tab3: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
                tab1Content: false,
                tab2Content: false,
                tab3Content: true,
            })
        }
    }

    const renderPendingOrders = () => {
        const {orders} = props;
        if (orders) {
            return Object.keys(orders).map((val) => {
                const userUid = orders[val].userUid;
                const orderId = orders[val].id;
                if (orders[val].status === "PENDING") {
                    return (
                        <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={orders[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">{orders[val].userName}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span
                                        className="text-uppercase text-danger order-req-status">{orders[val].status}</span>
                                </div>
                            </div>
                            {
                                Object.keys(orders[val].itemsList).map((val2) => {
                                    // console.log(myOrder[val].itemsList[val2])
                                    // console.log(val2)
                                    return (
                                        <div className="row mb-3" key={val2}>
                                            <div
                                                className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                <img style={{width: "70px", height: "70px"}} alt="Natural Healthy Food"
                                                     src={orders[val].itemsList[val2].itemImageUrl}/>
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                <h6 className="">{orders[val].itemsList[val2].itemTitle}</h6>
                                                <p className="mb-1">
                                                    <small>{orders[val].itemsList[val2].itemIngredients}</small></p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                                <span style={{fontSize: "14px"}}
                                                      className="mx-3"><b>RS.{orders[val].itemsList[val2].itemPrice}</b></span>
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
                                        style={{fontSize: '1.1rem'}}>$.{orders[val].totalPrice}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    const renderInProgressOrders = () => {
        const {myOrder} = this.props;
        if (myOrder) {
            return Object.keys(myOrder).map((val) => {
                const userUid = myOrder[val].userUid;
                const orderId = myOrder[val].id;
                if (myOrder[val].status === "IN PROGRESS") {
                    return (
                        <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={myOrder[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">{myOrder[val].userName}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span
                                        className="text-uppercase text-danger order-req-status">{myOrder[val].status}</span>
                                </div>
                            </div>
                            {
                                Object.keys(myOrder[val].itemsList).map((val2) => {
                                    // console.log(myOrder[val].itemsList[val2])
                                    // console.log(val2)
                                    return (
                                        <div className="row mb-3" key={val2}>
                                            <div
                                                className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                <img style={{width: "70px", height: "70px"}} alt="Natural Healthy Food"
                                                     src={myOrder[val].itemsList[val2].itemImageUrl}/>
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                <h6 className="">{myOrder[val].itemsList[val2].itemTitle}</h6>
                                                <p className="mb-1">
                                                    <small>{myOrder[val].itemsList[val2].itemIngredients}</small></p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                                <span style={{fontSize: "14px"}}
                                                      className="mx-3"><b>RS.{myOrder[val].itemsList[val2].itemPrice}</b></span>
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
                                        style={{fontSize: '1.1rem'}}>$.{myOrder[val].totalPrice}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    const renderDeliveredOrders = () => {
        const {myOrder} = this.props;
        // console.log(myOrder)
        if (myOrder) {
            return Object.keys(myOrder).map((val) => {
                if (myOrder[val].status === "DELIVERED") {
                    return (
                        <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={myOrder[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">{myOrder[val].userName}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span
                                        className="text-uppercase text-success order-req-status">{myOrder[val].status}</span>
                                    {/* <span className="text-uppercase text-success order-req-status">{orderRequest[val].status}</span> */}
                                </div>
                            </div>
                            {
                                Object.keys(myOrder[val].itemsList).map((val2) => {
                                    // console.log(myOrder[val].itemsList[val2])
                                    // console.log(val2)
                                    return (
                                        <div className="row mb-3" key={val2}>
                                            <div
                                                className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                <img style={{width: "70px", height: "70px"}} alt="Natural Healthy Food"
                                                     src={myOrder[val].itemsList[val2].itemImageUrl}/>
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                <h6 className="">{myOrder[val].itemsList[val2].itemTitle}</h6>
                                                <p className="mb-1">
                                                    <small>{myOrder[val].itemsList[val2].itemIngredients}</small></p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                                <span style={{fontSize: "14px"}}
                                                      className="mx-3"><b>RS.{myOrder[val].itemsList[val2].itemPrice}</b></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                    <h6 style={{fontSize: '15px'}} className="text-success">This order is successfully
                                        delivered</h6>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4">Total Price:</b><span
                                        style={{fontSize: '1.1rem'}}>$.{myOrder[val].totalPrice}</span></p>
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
                                        <p className="order-req-tab-text"><FontAwesomeIcon icon="spinner"
                                                                                           className="mr-3"/>Pending</p>
                                    </div>
                                    <div className={tabState.tab2} onClick={() => handleTabs("tab2")}>
                                        <p className="order-req-tab-text"><FontAwesomeIcon icon="truck"
                                                                                           className="mr-3"/>In Progress
                                        </p>
                                    </div>
                                    <div className={tabState.tab3} onClick={() => handleTabs("tab3")}>
                                        <p className="order-req-tab-text"><FontAwesomeIcon icon="tasks"
                                                                                           className="mr-3"/>Delivered
                                        </p>
                                    </div>
                                </div>
                                {tabState.tab1Content &&
                                < div className="row pending-order-section">
                                    <div className="col-12 bg-white p-4">
                                        {renderPendingOrders()}
                                    </div>
                                </div>
                                }
                                {tabState.tab2Content && <div className="row inProgress-order-section">
                                    <div className="col-12 bg-white p-4">
                                        {renderInProgressOrders()}
                                    </div>
                                </div>
                                }
                                {tabState.tab3Content && <div className="row delivered-order-section">
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

const mapStateToProps = state => {
    return {
        user: state.user,
        ordrers: state.orders,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         getOrders: (user) => dispatch(getOrders(user)),
//     }
// }

export default connect(mapStateToProps, null)(ClientOrders);
