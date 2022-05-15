import React, { useEffect, useState } from "react";
import NavPur from "../Purchase/NavPur/NavPur";
import { useSelector } from "react-redux";
import styled from "./Complete.module.css";
import { Link } from "react-router-dom";

const Complete = () => {
  const cartProducts = useSelector((store) => store.cartProducts);
  const [data, setData] = useState([]);
  const url = "https://adidas-db.herokuapp.com/buyer";
  // const [data1,setData1] = useState([])
  // const getTodo = () => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  //     .catch((error) => console.log(error));
  // };
  // useEffect(() => getTodo(), [])
  // const getTodo1 = () => {
  //   fetch("https://adidas-db.herokuapp.com/cartProducts")
  //     .then((res) => res.json())
  //     .then((res) => setData1(res))
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => getTodo1(), []);
  return (
    <>
      <NavPur />
      <div className={styled.Complete_container}>
      <Link to="/" style={{
        height:"20px",
        color:"black"

      }}>Home</Link>
        <h1>YOUR ORDER WAS PLACED SUCCESSFULLY</h1>
        <p>Your Order no 456975</p>
        {cartProducts.map((ele) => (
          <div className={styled.img_container}>
            <img
              style={{
                height: "200px",
              }}
              src={ele.url}
              alt=""
            />
            <p>Expected Delivery within 3-9 bussiness day</p>
            <p>Standard Delivery</p>
          </div>
        ))}
        {data.map((ele, index) => (
          <div className={styled.delivery}>
            <p>{`Hi ${ele.last_name}, thanks for showing with adidas! We 'll send a confirmation email to ${ele.email} shortly.`}</p>
            <p style={{
              fontSize:"20px",
              paddingTop:"20px"
            }}>DELIVERY ADDRESS</p>
            <p>{ele.first_name + " " + ele.last_name}</p>
            <p>{ele.address}</p>
            <p>{ele.landmarks}</p>
            <p>{ele.pincode}</p>
            <p>{ele.number}</p>
            <p style={{
              fontSize:"20px",
              paddingTop:"20px"
            }}>Billing Details</p>
            <p>{ele.first_name +" " +ele.last_name}</p>
            <p>{ele.address}</p>
          </div>
        ))}

       
      </div>
    </>
  );
};

export default Complete;
