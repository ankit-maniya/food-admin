import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Tooltip from "../../common/Tooltip";
import style from "./orderDetails.css";
import { USERS } from "../../../../Utils/user";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const OrderDetails = (props) => {
  let { id } = useParams();

  const buttonTypes = [
    { type: "REJECTED", color: "danger" },
    { type: "SELECT", color: "primary" },
    { type: "PENDING", color: "warning" },
    { type: "DELIVERED", color: "success" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userOrderDetails, setUserOrderDetails] = useState(false);
  const [dropDownActiveName, setDropDownActiveName] = useState("SELECT");
  const [DropDownActiveColor, setDropDownActiveColor] = useState("primary");
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const checkUser = () => {
    USERS.map((user) => {
      if (user?.id == id) {
        return setUserOrderDetails(user);
      }
    });
  };

  useEffect(() => {
    if (id) {
      checkUser();
    }
  }, [id]);

  const checkColor = (color) => {
    if (color == dropDownActiveName) {
      return;
    }
    buttonTypes.map((btn) => {
      if (color === btn.type) {
        setDropDownActiveColor(btn.color);
        setDropDownActiveName(color);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Orde Status Updated!");
  };
  return (
    <div className="row m-0 mt-3">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <div className="orderDetail__container p-2 rounded shadow">
          <Form
            className="form__container"
            onSubmit={(event) => handleSubmit(event)}
          >
            <h3>Order Details</h3>
            <hr />
            <div className="d-flex justify-content-center">
              <img
                src={userOrderDetails?.profile}
                className="shadow-lg profile__image__edit"
                width="150px"
              />
            </div>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={userOrderDetails?.name ? userOrderDetails?.name : ""}
                    placeholder="Name"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                    value={
                      userOrderDetails?.email ? userOrderDetails?.email : ""
                    }
                    disabled
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="address"
                id="exampleAddress"
                placeholder="Address"
                value={
                  userOrderDetails?.address ? userOrderDetails?.address : ""
                }
                disabled
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    value={userOrderDetails?.city ? userOrderDetails?.city : ""}
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="State"
                    value={
                      userOrderDetails?.state ? userOrderDetails?.state : ""
                    }
                    disabled
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="quantity">Quantity</Label>
                  <Input
                    type="text"
                    name="quantity"
                    placeholder="quantity"
                    id="quantity"
                    value={
                      userOrderDetails?.quantity
                        ? userOrderDetails?.quantity
                        : ""
                    }
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="total">total</Label>
                  <Input
                    type="text"
                    name="total"
                    placeholder="total"
                    id="total"
                    value={
                      userOrderDetails?.total ? userOrderDetails?.total : ""
                    }
                    disabled
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  pincode
                  <Label for="pincode">Pincode</Label>
                  <Input
                    type="number"
                    name="pincode"
                    id="pincode"
                    placeholder="Pincode"
                    value={
                      userOrderDetails?.pincode ? userOrderDetails?.pincode : ""
                    }
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="cstatus">Current Status</Label>
                  <Input
                    type="text"
                    name="cstatus"
                    id="cstatus"
                    placeholder="cstatus"
                    value={
                      userOrderDetails?.status ? userOrderDetails?.status : ""
                    }
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="status">Update Status</Label>
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle
                      color={DropDownActiveColor}
                      caret
                      data-for="tooltip__updateStatus__action"
                      data-tip
                    >
                      {dropDownActiveName}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Status Types</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        onClick={() => {
                          checkColor("PENDING");
                        }}
                      >
                        PENDING
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => {
                          checkColor("REJECTED");
                        }}
                      >
                        REJECTED
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => {
                          checkColor("DELIVERED");
                        }}
                      >
                        DELIVERD
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </FormGroup>
              </Col>
            </Row>
            <Button
              color="primary btn-primary-new"
              className="shadow"
              data-for="tooltip__save__action"
              data-tip
              block
            >
              SAVE
            </Button>
          </Form>
        </div>
      </div>
      <Tooltip />
    </div>
  );
};

export default OrderDetails;
