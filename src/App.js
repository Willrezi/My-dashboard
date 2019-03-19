import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Home from "./containers/Home";

class App extends Component {
  render() {
    const withLayout = Component => {
      return (
        <div>
          <Header />
          <Component />
        </div>
      );
    };
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/home" render={() => withLayout(Home)} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
