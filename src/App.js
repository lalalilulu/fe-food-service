import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Loader from "react-loader-spinner";
import { useMediaQuery } from "react-responsive";
import Menu from "./FoodMenu/Menu";
import MobileNav from "./Navigation/MobileBar/LeftSideBar";
import DesktopNav from "./Navigation/DesktopBar/LeftSideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";


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


// const Profile = lazy(() => import("./Profile"));
// const Cart = lazy(() => import("./Cart"));
// const CompleteOrder = lazy(() => import("./CompleteOrder"));
// const NoMatchPage = lazy(() => import("./404Error"));


function App() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'});
    return (
        <Router>
            <Suspense fallback={<Loader className="loader" type="Puff" color="#7B1FA2" height={500} width={300}
                                        timeout={300}/>}>
                {isTabletOrMobile && <MobileNav/>}
                {isDesktopOrLaptop && <DesktopNav/>}
                <main className="main">
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
                        {/*/!*<Route path="/dish/:id" component={ItemDetail} />*!/*/}
                        {/*<Route path="/profile" component={Profile} />*/}
                        {/*<Route path="/cart" exact component={Cart} />*/}
                        {/*/!*<Route path="/order/:id" component={Order} />*!/*/}
                        {/*<Route component={NoMatchPage} />*/}
                    </Switch>
                </main>
            </Suspense>
        </Router>
    );
}

export default App;
