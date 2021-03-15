import './styles/app.scss';
import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Loader from "react-loader-spinner";
import { Autorisation } from "./Autorisation";
const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));
const Cart = lazy(() => import("./Cart"));
const Orders = lazy(() => import("./Orders"));
const NoMatchPage = lazy(() => import("./404Error"));

function App() {
  return (
      <Router>
        <Suspense fallback={<Loader type="Puff" color="#7B1FA2" height={500} width={300} timeout={300}/>}>
            <Switch>
              <Route path="/" exact component={Autorisation}/>
              <Route path="/main" exact component={Dashboard}/>
              <Route path="/profile" exact component={Profile}/>
              <Route path="/cart" exact component={Cart}/>
              <Route path="/orders" exact component={Orders}/>
              <Route component={NoMatchPage} />
            </Switch>
        </Suspense>
      </Router>
  );
}

export default App;
