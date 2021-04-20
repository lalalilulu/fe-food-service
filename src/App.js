import React, {lazy, Suspense} from 'react';
import {Router, Redirect, Route, Switch} from "react-router-dom";
import Loader from "react-loader-spinner";
import {ToastContainer} from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./app.scss";

import {useMediaQuery} from "react-responsive";
import { history } from './_helpers/History';
import LeftSideDesktopBar from "./Navi/DesktopBar/LeftSideDesktopBar";
import LeftSideMobileBar from "./Navi/MobileBar/LeftSideMobileBar";
import Menu from "./FoodMenu/Menu";

const SignIn = lazy(() => import("./Autorisation/SignIn"));
const SignUp = lazy(() => import("./Autorisation/SignUp"));
const Profile = lazy(() => import("./Profile/Profile"));
const CompletedOrders = lazy(() => import("./OrderTableComponents/OrderClientList"));
const NewOrders = lazy(() => import("./OrderTableComponents/NewOrderClientList"));
const ReceivedOrders = lazy(() => import("./OrderTableComponents/OrderAdminList"));
const Deliveries = lazy(() => import("./OrderTableComponents/OrderCourierList"));
const Cart = lazy(() => import("./Cart/Cart"));
const MenuItem = lazy(() => import("./FoodItem/Item"));
const EditItemForm = lazy(() => import("./FoodItem/ItemForm"));

function App() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'});
    return (
        <Router history={history}>
            <Suspense fallback={<Loader className="loader" type="Puff" color="#7B1FA2" height={200} width={200}
                                        timeout={300}/>}>
                {isDesktopOrLaptop && <LeftSideDesktopBar/>}
                {isTabletOrMobile && <LeftSideMobileBar/>}
                <main className={`main main-${isDesktopOrLaptop ? 'desktop' : 'mobile'}`}>
                    <Switch>
                        <Route path="/" exact component={Menu}/>
                        <Route path="/menu/:id" component={MenuItem}/>
                        <Route path="/edit/:id" component={EditItemForm}/>
                        <Route path="/signin" exact component={SignIn}/>
                        <Route path="/signup" exact component={SignUp}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/completedOrders" exact component={CompletedOrders}/>
                        <Route path="/newOrders" exact component={NewOrders}/>
                        <Route path="/receivedOrders" exact component={ReceivedOrders}/>
                        <Route path="/deliveries" exact component={Deliveries}/>
                        <Route path="/cart" exact component={Cart}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </main>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Suspense>
        </Router>
    );
}

export default App;
