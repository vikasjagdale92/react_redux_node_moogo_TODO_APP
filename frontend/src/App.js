// App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authentication";

import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import EmployeeProfile from "./components/EmployeeProfile";
import SassAssignment from "./components/SassAssignment";
import Bootstrap_4 from "./components/Bootstrap_4";

import "bootstrap/dist/css/bootstrap.min.css";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/empProfile" component={EmployeeProfile} />
              <Route exact path="/empProfile/:id" component={EmployeeProfile} />
            </div>
            <Route exact path="/sass-Assignment" component={SassAssignment} />
            <Route exact path="/Bootstrap_4" component={Bootstrap_4} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
