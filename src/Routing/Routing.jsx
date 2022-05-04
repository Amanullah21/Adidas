import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import  Home  from "../pages/Home/Home"
import Login  from "../pages/Login"
import Product from "../pages/Product/Product";
import SignUp from "../pages/SignUp/SignUp";
import Slider1 from "../pages/Slider1";
import Todo from "../pages/Todo";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};
