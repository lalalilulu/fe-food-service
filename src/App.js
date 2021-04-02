import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

import {useMediaQuery} from "react-responsive";
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
        <Router>
            <Suspense fallback={<Loader className="loader" type="Puff" color="#7B1FA2" height={500} width={300}
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
                    </Switch>
                </main>
            </Suspense>
        </Router>
    );
}

export default App;
