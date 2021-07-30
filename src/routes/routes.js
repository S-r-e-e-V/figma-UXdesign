import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import PageNotFound from "../screens/PageNotFound";
import Profile from "../screens/Profile";

import "../App.css";
const RootRoute = () => {
  return (
    <>
      <Router>
        <Header />
        <SubHeader />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default RootRoute;
