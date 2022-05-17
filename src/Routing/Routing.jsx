import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Men from "../pages/Men/Men";
import Product from "../pages/Product/Product";
import SignlePage from "../pages/Product/SignlePage";
import SignUp from "../pages/SignUp/SignUp";
import Slider1 from "../pages/Slider1";
import Todo from "../pages/Todo";
import Women from "../pages/Women/Women";
import Bag from "../Order/Purchase/Bag/Bag";
import Purchase from "../Order/Purchase/Purchase";
import Payment from "../Order/Payment/Payment";
import Complete from "../Order/Complete.jsx/Complete";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adidas" element={<Product />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:userId" element={<SignlePage />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/complete" element={<Complete/>} />
      </Routes>
    </div>
  );
};
