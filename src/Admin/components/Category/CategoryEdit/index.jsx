import React, { useState, useEffect } from "react";
import style from "./categoryEdit.css";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Tooltip from "../../common/Tooltip";
import { CATEGORYS } from "../../../../Utils/category";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const CategoryEdit = (props) => {
  let { cat_Id } = useParams();

  const [categoryEdit, setCategoryDetails] = useState(false);

  const checkCategory = () => {
    CATEGORYS.map((category) => {
      if (category?.cat_id == cat_Id) {
        return setCategoryDetails(category);
      }
    });
  };

  useEffect(() => {
    if (cat_Id) {
      checkCategory();
    }
  }, [cat_Id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Category Details Updated!");
  };
  return (
    <div className="category__edit__container ">
      <div className="row m-0 mt-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-2 mb-2">
          <Form
            className="form__container p-3 form__bg"
            onSubmit={(event) => handleSubmit(event)}
          >
            <h3>Category Details</h3>
            <hr />
            <Row form>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <FormGroup>
                  <img
                    src={categoryEdit?.category_image}
                    className="shadow-lg "
                    width="100%"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="category_name">Name</Label>
                  <Input
                    type="text"
                    name="category_name"
                    id="category_name"
                    value={
                      categoryEdit?.category_name
                        ? categoryEdit?.category_name
                        : ""
                    }
                    placeholder="Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="category_image">Image</Label>
                  <Input
                    type="file"
                    name="category_image"
                    id="category_image"
                    placeholder="Image"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="category_subname">Sub Name</Label>
                  <Input
                    type="text"
                    name="category_subname"
                    id="category_subname"
                    value={
                      categoryEdit?.category_subname
                        ? categoryEdit?.category_subname
                        : ""
                    }
                    placeholder="Sub Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="category_desc">Description</Label>
                  <Input
                    type="textarea"
                    name="category_desc"
                    id="category_desc"
                    value={
                      categoryEdit?.category_desc
                        ? categoryEdit?.category_desc
                        : ""
                    }
                    placeholder="Description"
                  />
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
    </div>
  );
};

export default CategoryEdit;
