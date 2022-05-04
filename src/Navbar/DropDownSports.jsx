import React from "react";
import styled from "./Navbar.module.css";
import { Link } from "react-router-dom";

const DropDownSports = () => {
  return (
    <div class={styled.dropdown}>
      <p class={styled.dropbtn}>Sports</p>
      <div>
        <div class={styled.dropdown_content}>
          <Link to="/">FEATURED</Link>
          <Link to="/login">New Arrivals</Link>
          <Link to="/">Manchester United</Link>
          <Link to="/">Originals</Link>
          <Link to="/">Ultraboost</Link>
          <Link to="/">4DEWD</Link>
          <Link to="/">Stan SMith</Link>
          <br />
          <Link to="/" style={{ color: "red" }}>
            Outlet
          </Link>
          <br />
          <br />
          <br />
          <Link to="/">All WOMEN's</Link>
        </div>
      </div>
    </div>
  )
}

export default DropDownSports