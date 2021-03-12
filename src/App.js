import './styles/app.scss';
import './styles/startpage.scss';
import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Loader from "react-loader-spinner";
import {Navigation} from "./NavComponent";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";

const ProfilePage = lazy(() => import("./ProfilePage"));

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

function App() {
  return (
      <Router>
        <Suspense fallback={<Loader type="Puff" color="#00796B" height={100} width={100} timeout={3000}/>}>
          <div className="start-page">
            <img className="app-logo" src="../assets/images/food-logo.png" alt="Logo"/>
            <Navigation />
            <Switch>
              <Route path="/" exact component={LoginForm} />
              <Route path="/signup" exact component={SignUpForm} />
              <Route path="/profile" exact component={ProfilePage} />
              <Route component={NoMatchPage} />
            </Switch>
          </div>
        </Suspense>
      </Router>
  );
}

export default App;
