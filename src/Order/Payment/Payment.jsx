import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "./Payment.module.css";
import NavPur from "../../Order/Purchase/NavPur/NavPur";

const Payment = () => {
  const cartProducts = useSelector((store) => store.cartProducts);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [radioBtn, setRadioBtn] = useState(false);
  const navigate = useNavigate();

  // const url = "https://adidas-db.herokuapp.com/buyer";
  // const getTodo = () => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  //     .catch((error) => console.log(error));
  // };
  // console.log(data)
  // useEffect(() => getTodo(), []);

  const completdpage = () => {
    navigate("/complete");
  };
  return (
    <>
      <NavPur />
      <div className={styled.payment_container}>
        <h2>Payment Method</h2>
        <h6>All transactions are safe and secure</h6>
        <hr
          style={{
            backgroundColor: "white",
          }}
        />
        <div className={styled.payment_mode}>
          <input
            type="radio"
            name=""
            id=""
            onChange={(e) => setRadioBtn(!radioBtn)}
            style={{
              height: "30px",
              padding: "30px",
            }}
          />
          <label
            htmlFor="payment"
            style={{
              paddingLeft: "30px",
              fontSize: "30px",
            }}
          >
            Cash Payment
          </label>
          <h6>
            No online payment needed – pay in cash using the exact change once
            your items are delivered!
          </h6>
          <h6>
            Your bank account details will only be required if you wish to
            return anything for a refund.
          </h6>
          <button
            className="resuble_button"
            onClick={completdpage}
            style={{
              height: "40px",
              width: "90%",

              marginTop: "20px",
            }}
          >
            Place Order
          </button>
        </div>
        <div className={styled.summary}>
          <div>
            <h4>ORDER SUMMARY</h4>
            <h6>{data1.length} items</h6>
            <h6>Delivery free</h6>
            <h5>GST added</h5>
          </div>
          <input type="text" placeholder="Add Promo" />
          <hr />
          {cartProducts.map((ele, index) => (
            <>
              <img
                style={{
                  height: "200px",
                }}
                src={ele.url}
                alt=""
              />
              <h5>{ele.title}</h5>
              <span>1{ele.price}$</span>
              <span>{ele.gen}</span>
              <span>{ele.cate}</span>
            </>
          ))}
          {data.map((ele) => (
            <div>
              <h4>{ele.first_name}</h4>
              <h6>{ele.last_name}</h6>
              <h6>{ele.address}</h6>
              <h6>{ele.city}</h6>
              <h6>{ele.landmark}</h6>
              <h6>{ele.state}</h6>
              <h6>{ele.pincode}</h6>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Payment;
