import React, {lazy, Suspense, useEffect} from 'react';
import {Router, Redirect, Route, Switch} from "react-router-dom";
import Loader from "react-loader-spinner";
import {toast, ToastContainer} from "react-toastify";
import {useMediaQuery} from "react-responsive";
import { history } from './_helpers/History';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./app.scss";

import LeftSideDesktopBar from "./Navi/DesktopBar/LeftSideDesktopBar";
import LeftSideMobileBar from "./Navi/MobileBar/LeftSideMobileBar";
import Menu from "./FoodMenu/Menu";
import {PrivateRoute} from "./_components/PrivateRoute";
import {AdminRoute} from "./_components/AdminRoute";
import {CourierRoute} from "./_components/CourierRoute";
import {useDispatch, useSelector} from "react-redux";
import {messageActions} from "./_actions/MessageActions";
import {messagesConstants} from "./_constants/MessageConstants";
const SignIn = lazy(() => import("./Autorisation/SignIn"));
const SignUp = lazy(() => import("./Autorisation/SignUp"));
const Profile = lazy(() => import("./Profile/Profile"));
const ClientOrders = lazy(() => import("./Orders/ClientOrders"));
const AllOrders = lazy(() => import("./Orders/AdminOrders"));
const Deliveries = lazy(() => import("./Orders/Deliveries"));
const Cart = lazy(() => import("./Cart/Cart"));
const MenuItem = lazy(() => import("./FoodItem/Item"));
const EditItemForm = lazy(() => import("./FoodItem/ItemForm"));

function App() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'});

    const notification = useSelector(state => state.notification);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear notifications on location change
            dispatch(messageActions.clear());
        });
    }, []);

    return (
        <Router history={history}>
            <Suspense fallback={<Loader className="loader" type="Puff" color="#7B1FA2" height={200} width={200}
                                        timeout={300}/>}>
                {isDesktopOrLaptop && <LeftSideDesktopBar/>}
                {isTabletOrMobile && <LeftSideMobileBar/>}
                <main className={`main main-${isDesktopOrLaptop ? 'desktop' : 'mobile'}`}>
                    <Switch>
                        <Route path="/menu" exact component={Menu}/>
                        <Route path="/menu/:id" component={MenuItem}/>
                        <Route path="/signin" exact component={SignIn}/>
                        <Route path="/signup" exact component={SignUp}/>
                        <PrivateRoute path="/profile" exact component={Profile}/>
                        <PrivateRoute path="/cart" exact component={Cart}/>
                        <PrivateRoute path="/orders" exact component={ClientOrders}/>
                        <AdminRoute path="/receivedOrders" exact component={AllOrders}/>
                        <AdminRoute path="/edit/:id" component={EditItemForm}/>
                        <CourierRoute path="/deliveries" exact component={Deliveries}/>
                        <Redirect from="*" to="/menu"/>
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
                {notification.type === messagesConstants.SUCCESS && toast.success(notification.message)}
                {notification.type === messagesConstants.ERROR && toast.error(notification.message)}
            </Suspense>
        </Router>
    );
}

export default App;
