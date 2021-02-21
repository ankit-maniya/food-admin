import React, { useState, useEffect } from "react";
import style from "./menu.css";
import { CATEGORYS } from "../../../Utils/category";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { BiEdit } from "react-icons/bi";
import { useParams } from "react-router-dom";

const Menu = (props) => {
  const [category, setCategory] = useState();
  const { menu_Id } = useParams();
  const checkMenu = () => {
    let categoryWiseMenu = [];
    if (CATEGORYS && CATEGORYS.length > 0) {
      CATEGORYS.map((mapedCategory) => {
        if (mapedCategory?.menu) {
          mapedCategory?.menu?.map((menu) => {
            if (menu.id == menu_Id && menu) {
              categoryWiseMenu.push({ cat_Id: mapedCategory.cat_id, menu });
            }
          });
        }
      });
    }
    console.log("sadasd->>", categoryWiseMenu);
    setCategory(categoryWiseMenu);
  };

  useEffect(() => {
    checkMenu();
  }, []);

  return (
    <div className="category__container">
      <div className="row m-0 mt-2">
        {category && category.length > 0 && category.menu
          ? category.menu.map((menu) => {
              console.log("menu", menu);
              return (
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-2">
                  <div className="shadow">
                    <Card>
                      <CardBody>
                        <div className="d-flex justify-content-between">
                          <div>
                            <CardTitle tag="h5">{menu.menu_name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                              {menu.menu_subname}
                            </CardSubtitle>
                          </div>
                          <div
                            className="d-flex justify-content-center align-items-center"
                            onClick={() => {
                              props.history.push("/menu/" + menu.menu_.cat_id);
                            }}
                          >
                            <BiEdit className="edit__icon  btn-primary-new rounded" />
                          </div>
                        </div>
                      </CardBody>
                      <img
                        width="100%"
                        src={menu.menu__image}
                        alt="Card image cap"
                      />
                      {/* <CardBody>
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
                      </CardBody> */}
                    </Card>
                  </div>
                </div>
              );
            })
          : "Menu Not Found"}
      </div>
    </div>
  );
};

export default Menu;
