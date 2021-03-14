import './styles/app.scss';
import './styles/autorisation.scss';
import "./styles/profile.scss";
import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Loader from "react-loader-spinner";
import { Autorisation } from "./Autorisation";

const Profile = lazy(() => import("./Profile"));
const Dashboard = lazy(() => import("./Dashboard"));
const NoMatchPage = lazy(() => import("./404Error"));

function App() {
  return (
      <Router>
        <Suspense fallback={<Loader type="Puff" color="#7B1FA2" height={100} width={100} timeout={3000}/>}>
            <Switch>
              <Route path="/" exact component={Autorisation}/>
              <Route path="/dashboard" exact component={Dashboard}/>
              <Route path="/profile" exact component={Profile}/>
              <Route component={NoMatchPage} />
            </Switch>
        </Suspense>
      </Router>
  );
}

export default App;
