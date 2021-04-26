import React, {useState} from "react";
import {orderConstants} from "../_constants/OrderConstants";
import AdminTemplate from "./AdminTemplate";
import './style.scss';

function AdminOrders() {

    const activeTab = "col-12 col-lg-4 col-md-4 text-center order-req-tab-active";
    const notActiveTab = "col-12 col-lg-4 col-md-4 text-center order-req-tab-notActive";

    const [tabState, setTabState] =
        useState({
            tab1: activeTab,
            tab2: notActiveTab,
            tab3: notActiveTab,
            tab1Content: true,
            tab2Content: false,
            tab3Content: false,
        });

    const handleTabs = (e) => {
        if (e === "tab1") {
            setTabState({
                tab1: activeTab,
                tab2: notActiveTab,
                tab3: notActiveTab,
                tab1Content: true,
                tab2Content: false,
                tab3Content: false,
            })
        } else if (e === "tab2") {
            setTabState({
                tab1: notActiveTab,
                tab2: activeTab,
                tab3: notActiveTab,
                tab1Content: false,
                tab2Content: true,
                tab3Content: false,
            })
        } else if (e === "tab3") {
            setTabState({
                tab1: notActiveTab,
                tab2: notActiveTab,
                tab3: activeTab,
                tab1Content: false,
                tab2Content: false,
                tab3Content: true,
            })
        }
    }

    const renderPendingOrders = () => {
        return <AdminTemplate status={orderConstants.PENDING_STATUS} showButton={true}/>
    }

    const renderInProgressOrders = () => {
        return <AdminTemplate status={orderConstants.IN_PROGRESS_STATUS} showButton={false}/>
    }


    const renderDeliveredOrders = () => {
        return <AdminTemplate status={orderConstants.DELIVERED_STATUS} showButton={false}/>
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1">
                    <div className="container">
                        <div className="row">
                            <div className={tabState.tab1} onClick={() => handleTabs("tab1")}>
                                <p className="order-req-tab-text">Pending</p>
                            </div>
                            <div className={tabState.tab2} onClick={() => handleTabs("tab2")}>
                                <p className="order-req-tab-text">In Progress</p>
                            </div>
                            <div className={tabState.tab3} onClick={() => handleTabs("tab3")}>
                                <p className="order-req-tab-text">Delivered</p>
                            </div>
                        </div>
                        {tabState.tab1Content &&
                        < div className="row order-render-container">
                            <div className="col-12 p-4">
                                {renderPendingOrders()}
                            </div>
                        </div>
                        }
                        {tabState.tab2Content &&
                        < div className="row order-render-container">
                            <div className="col-12 p-4">
                                {renderInProgressOrders()}
                            </div>
                        </div>
                        }
                        {tabState.tab3Content && <div className="row order-render-container">
                            <div className="col-12 p-4">
                                {renderDeliveredOrders()}
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrders;
