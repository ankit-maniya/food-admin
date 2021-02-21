import React, { useState } from "react";
import { Button, Input, Table } from "reactstrap";
import { IoSearchCircleOutline } from "react-icons/io5";
import { USERS } from "../../../Utils/user";
import Tooltip from "../../components/common/Tooltip";
import style from "./order.css";
const Orders = (props) => {
  console.log("porpsof orders-->", props);
  return (
    <div className="row m-0 mt-3">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-6 d-flex mt-1 mb-1">
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Search Hear !!"
              className="input__search"
            />
            <span
              className="primary btn-primary-new"
              onClick={() => alert("Search Keyword")}
            >
              <IoSearchCircleOutline className="search__icon" />
            </span>
          </div>
          <div className="col-12 col-md-6 col-lg-6 text-center mt-1 mb-1">
            <Button
              className=""
              color="primary btn-primary-new"
              onClick={() => alert("Advanced Options")}
              block
            >
              Advanced Options
            </Button>
          </div>
        </div>
        <Table hover responsive className="shadow">
          <thead className="table__header shadow-sm">
            <tr>
              <th>#</th>
              <th>PROFILE</th>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>PINCODE</th>
              <th>STATUS</th>
              <th>TOTAL</th>
              <th>QUANTITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {USERS && USERS.length > 0 ? (
              USERS.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>
                      <img
                        src={user.profile}
                        className="profile__image"
                        width="100%"
                      />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.address}</td>
                    <td>{user.pincode}</td>
                    <td>{user.status}</td>
                    <td>{user.total}</td>
                    <td>{user.quantity}</td>
                    <td>
                      <Button
                        color="primary btn-primary-new"
                        className="shadow"
                        onClick={() =>
                          props.history.push("/ordersdetails/" + user.id)
                        }
                        data-for="tooltip__view__action"
                        data-tip
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1>Data Not Found</h1>
            )}
          </tbody>
        </Table>
      </div>
      <Tooltip />
    </div>
  );
};

export default Orders;
