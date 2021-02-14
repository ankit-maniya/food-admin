import { Button } from "reactstrap";
import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
} from "reactstrap";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(email, password);

  const handleSubmit = (event) => {
    event.preventDefault();
    let emailBox = document.querySelector("#email");
    let passwordBox = document.querySelector("#password");
    if (!email) {
      emailBox.classList.add("is-invalid");
      emailBox.classList.remove("is-valid");
    } else {
      emailBox.classList.add("is-valid");
      emailBox.classList.remove("is-invalid");
    }
    if (!password) {
      passwordBox.classList.add("is-invalid");
      passwordBox.classList.remove("is-valid");
    } else {
      passwordBox.classList.add("is-valid");
      passwordBox.classList.remove("is-invalid");
    }
  };

  return (
    <div className="container-fluid vh-100 login_div">
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 shadow-lg p-3 mb-5 bg-white rounded">
          <div className="login_titile text-center">Admin Pannel</div>
          <Form onSubmit={(event) => handleSubmit(event)} autoComplete="off">
            <FormGroup className="position-relative">
              <Label for="exampleEmail">EmailId</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              {/* <FormFeedback valid>Sweet! that name is available</FormFeedback> */}
            </FormGroup>
            <FormGroup className="position-relative">
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* <FormFeedback invalid>Sweet! that name is available</FormFeedback> */}
            </FormGroup>
            <Button color="primary" size="md" block>
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
