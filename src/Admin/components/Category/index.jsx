import React from "react";
import style from "./category.css";
import { CATEGORYS } from "../../../Utils/category";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { BiEdit } from "react-icons/bi";
const Category = (props) => {
  return (
    <div className="category__container">
      <div className="row m-0 mt-2">
        {CATEGORYS && CATEGORYS.length > 0
          ? CATEGORYS.map((category) => {
              return (
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-2">
                  <div className="shadow">
                    <Card>
                      <CardBody>
                        <div className="d-flex justify-content-between">
                          <div>
                            <CardTitle tag="h5">
                              {category.category_name}
                            </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                              {category.category_subname}
                            </CardSubtitle>
                          </div>
                          <div
                            className="d-flex justify-content-center align-items-center"
                            onClick={() => {
                              props.history.push(
                                "/category/" + category.cat_id
                              );
                            }}
                          >
                            <BiEdit className="edit__icon  btn-primary-new rounded" />
                          </div>
                        </div>
                      </CardBody>
                      <img
                        width="100%"
                        src={category.category_image}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardText className="text-truncate">
                          {category.category_desc}
                        </CardText>
                        <Button
                          color="primary btn-primary-new"
                          className="shadow"
                          onClick={() => {
                            props.history.push(
                              "/category/menu/" + category.cat_id
                            );
                          }}
                          block
                        >
                          MENUS
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              );
            })
          : "DATA NOT FOUND"}
      </div>
    </div>
  );
};

export default Category;
