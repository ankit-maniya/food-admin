import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Admin/components/common/Navbar";
import Topbar from "./Admin/components/common/Topbar";
import Dashboard from "./Admin/components/Dashboard";
import SignUp from "./Admin/components/SignUp";
import Login from "./Admin/components/Login"; 
import Orders from "./Admin/components/Orders"
import Profile from "./Admin/components/Profile"
import Menu from "./Admin/components/Menu";
import Category from "./Admin/components/Category";
import OrderDetails from "./Admin/components/Orders/orderDetails";
import CategoryEdit from "./Admin/components/Category/CategoryEdit";

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
          path="/ordersdetails/:id"
          component={OrderDetails}
        />

        <ProtectedRoute
          exact
          me={me()}
          path="/profile"
          component={Profile}
        />

        <ProtectedRoute
          exact
          me={me()}
          path="/category"
          component={Category}
        />

         <ProtectedRoute
          exact
          me={me()}
          path="/category/:cat_Id"
          component={CategoryEdit}
        />

        <ProtectedRoute
          exact
          me={me()}
          path="/category/menu/:cat_Id"
          component={Menu}
        />

        <ProtectedRoute
          exact
          me={me()}
          path="/menu"
          component={Menu}
        />

         <ProtectedRoute
          exact
          me={me()}
          path="/menu/:menu_Id"
          component={Menu}
        />
      </Switch>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
};

const PublicRoute = ({ component: Component, me, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // if (me) {
        //   return <Redirect to="/dashboard" />;
        // } else {
          return <Component {...props} />;
        // }
      }}
    />
  );
};

const ProtectedRoute = ({ component: Component, me, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // if (me) {
          return (
            <div className="row m-0 p-0 vh-100">
              <div className="col-12 col-sm-12 col-md-3 col-lg-2 m-0 p-0 navbar__div">
                {/* load -> first Navbar */}
                <Navbar />
              </div>
              <div className="col-12 col-sm-12 col-md-9 col-lg-10 topbar__div" id="component__div">
                {/* load -> first Topbar */}
                <div className="container-fluid tobar__fluid__container"> 
                  <Topbar />
                </div>
                {/* load -> Called Component */}
                <Component {...props} />
              </div>
            </div>);
        // } else {
        //   return <Redirect to="/" />;
        // }
      }}
    />
  );
};

export default AppRouter;
