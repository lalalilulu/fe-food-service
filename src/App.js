import './styles/app.scss';
import './styles/autorisation.scss';
import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Loader from "react-loader-spinner";
import { Autorisation } from "./Autorisation";

const ProfilePage = lazy(() => import("./ProfilePage"));

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

function App() {
  return (
      <Router>
        <Suspense fallback={<Loader type="Puff" color="#00796B" height={100} width={100} timeout={3000}/>}>
            <Switch>
              <Route path="/" exact component={Autorisation} />
              <Route path="/profile" exact component={ProfilePage} />
              <Route component={NoMatchPage} />
            </Switch>
        </Suspense>
      </Router>
  );
}

export default App;
