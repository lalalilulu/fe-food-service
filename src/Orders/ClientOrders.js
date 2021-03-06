import React, {useState} from "react";
import {orderConstants} from "../_constants/OrderConstants";
import ClientTemplate from "./templates/ClientTemplate";
import './style.scss';

function ClientOrders(props) {

    const activeTab = "col-12 col-lg-6 col-md-6 text-center order-req-tab-active";
    const notActiveTab = "col-12 col-lg-6 col-md-6 text-center order-req-tab-notActive";

    const [tabState, setTabState] =
        useState({
            tab1: props.location.activeTab === 'tab2' ? notActiveTab : activeTab,
            tab2:  props.location.activeTab === 'tab2' ? activeTab : notActiveTab,
            tab1Content: props.location.activeTab !== 'tab2' || props.location.activeTab === undefined,
            tab2Content: props.location.activeTab === 'tab2'
        });

    const handleTabs = (e) => {
        if (e === 'tab1') {
            setTabState({
                tab1: activeTab,
                tab2: notActiveTab,
                tab1Content: true,
                tab2Content: false
            })
        } else if (e === 'tab2') {
            setTabState({
                tab1: notActiveTab,
                tab2: activeTab,
                tab1Content: false,
                tab2Content: true
            })
        }
    }

    const renderInProgressOrders = () => {
        return <ClientTemplate status={orderConstants.IN_PROGRESS_STATUS} status2={orderConstants.PENDING_STATUS}/>
    }

    const renderDeliveredOrders = () => {
        return <ClientTemplate status={orderConstants.DELIVERED_STATUS}/>
    }

    return (
        <div className="container py-5">
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
                        <div className="row order-render-container">
                            <div className="col-12 p-4">
                                {renderInProgressOrders()}
                            </div>
                        </div>
                        }
                        {tabState.tab2Content && <div className="row order-render-container">
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

export default ClientOrders;
