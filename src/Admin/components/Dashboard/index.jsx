import React from "react";
import {
  IoBagCheckOutline,
  IoDocumentTextOutline,
  IoFastFoodOutline,
  IoPeopleOutline,
  IoStarHalf,
} from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import style from "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard__container row m-0 mt-1">
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5 ">
        <div className="dashboard__card card__1 shadow card__container__1">
          <div className="dashboard__card__image shadow-sm card__icon__container__1">
            <HiOutlineCurrencyRupee className="card__imgage" />
          </div>
          <div className="dashboard__card__information card__detail__container__1">
            <div className="dashboard__card__type">
              <span className="dashboard__card__type1">Total Ernings</span>
            </div>
            <div className="dashboard__card__value">
              <span className="dashboard__card__value1">100000000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5 card__container__2">
        <div className="dashboard__card card__2 shadow">
          <div className="dashboard__card__image shadow-sm card__icon__container__2">
            <IoDocumentTextOutline className="card__imgage" />
          </div>
          <div className="dashboard__card__information card__detail__container__2">
            <div className="dashboard__card__type">
              <span className="dashboard__card__type1">Category</span>
            </div>
            <div className="dashboard__card__value">
              <span className="dashboard__card__value1">5000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5 card__container__3">
        <div className="dashboard__card card__3 shadow">
          <div className="dashboard__card__image shadow-sm card__icon__container__3">
            <IoStarHalf className="card__imgage" />
          </div>
          <div className="dashboard__card__information card__detail__container__3">
            <div className="dashboard__card__type">
              <span className="dashboard__card__type1">Review</span>
            </div>
            <div className="dashboard__card__value">
              <span className="dashboard__card__value1">10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5 card__container__4">
        <div className="dashboard__card card__4 shadow">
          <div className="dashboard__card__image shadow-sm card__icon__container__4">
            <IoBagCheckOutline className="card__imgage" />
          </div>
          <div className="dashboard__card__information card__detail__container__4">
            <div className="dashboard__card__type">
              <span className="dashboard__card__type1">Orders</span>
            </div>
            <div className="dashboard__card__value">
              <span className="dashboard__card__value1">10000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5 card__container__5">
        <div className="dashboard__card card__5 shadow">
          <div className="dashboard__card__image shadow-sm card__icon__container__5">
            <IoFastFoodOutline className="card__imgage" />
          </div>
          <div className="dashboard__card__information card__detail__container__5">
            <div className="dashboard__card__type">
              <span className="dashboard__card__type1">Menu</span>
            </div>
            <div className="dashboard__card__value">
              <span className="dashboard__card__value1">50</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5 card__container__6">
        <div className="dashboard__card card__6 shadow">
          <div className="dashboard__card__image shadow-sm card__icon__container__6">
            <IoPeopleOutline className="card__imgage" />
          </div>
          <div className="dashboard__card__information card__detail__container__6">
            <div className="dashboard__card__type">
              <span className="dashboard__card__type1">User Ordered</span>
            </div>
            <div className="dashboard__card__value">
              <span className="dashboard__card__value1">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
