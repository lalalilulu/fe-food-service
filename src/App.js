import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

import {useMediaQuery} from "react-responsive";
import LeftSideDesktopBar from "./Navi/DesktopBar/LeftSideDesktopBar";
import LeftSideMobileBar from "./Navi/MobileBar/LeftSideMobileBar";


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
                {isDesktopOrLaptop && <LeftSideDesktopBar/>}
                {isTabletOrMobile && <LeftSideMobileBar/>}

            </Suspense>
        </Router>
    );
}

export default App;
