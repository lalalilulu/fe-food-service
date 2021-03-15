import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./styles/dashboard.scss";

import { Navigation } from "./Navigation";
import DashboardItem from "./DashboardItem";

import Loader from "react-loader-spinner";
const Profile = lazy(() => import("./Profile"));
const Cart = lazy(() => import("./Cart"));
const Orders = lazy(() => import("./CompleteOrder"));
const NoMatchPage = lazy(() => import("./404Error"));

function Dashboard() {

    const items = require("./fooddata.json").recipe;
    console.log(items);

    return (
                <div className="dashboard-container">
                    <Navigation />
                    <main className="content-box">
                        <ul className="cards">
                            {items.map((item) => (
                                <li className="card" key={item.name}>
                                    <DashboardItem id={item.id} image={item.image} name={item.name} description={item.description} price={Math.floor(Math.random() * (150 - 10) + 10)} />
                                </li>
                            ))}
                        </ul>
                    </main>
                </div>
    );
}

export default Dashboard;
