import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Navbar from "./Admin/components/common/Navbar";
import Topbar from "./Admin/components/common/Topbar";
import Dashboard from "./Admin/components/Dashboard";
import SignUp from "./Admin/components/SignUp";
import Login from "./Admin/components/Login";
import Orders from "./Admin/components/Orders"
import Profile from "./Admin/components/Profile"

const me = () => {
  let me = localStorage.getItem("me");
  console.log(me);
  return true;
};

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" me={me()} component={Login} />
        <PublicRoute exact me={me()} path="/signup" component={SignUp} />
        <ProtectedRoute
          exact
          me={me()}
          path="/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          me={me()}
          path="/orders"
          component={Orders}
        />

        <ProtectedRoute
          exact
          me={me()}
          path="/profile"
          component={Profile}
        />
      </Switch>
    </BrowserRouter>
    </>
  );
};

const PublicRoute = ({ component: Component, me, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (me) {
          return <Redirect to="/dashboard" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const ProtectedRoute = ({ component: Component, me, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (me) {
          return (
            <div className="row m-0 p-0">
              <div className="col-12 col-sm-12 col-md-3 col-lg-2 m-0 p-0 navbar__div">
                {/* load -> first Navbar */}
                <Navbar />
              </div>
              <div className="col-12 col-sm-12 col-md-9 col-lg-10 topbar__div" id="component__div">
                {/* load -> first Topbar */}
                <div className="container-fluid"> 
                  <Topbar />
                </div>
                {/* load -> Called Component */}
                <Component {...props} />
              </div>
            </div>);
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default AppRouter;
