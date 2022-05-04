import React from "react";
import DropDownBrands from "./DropDownBrands";
import DropDownKids from "./DropDownKids";
import DropDownMen from "./DropDownMen";
import DropDownOutlet from "./DropDownOutlet";
import DropDownSports from "./DropDownSports";
import DropDownWomen from "./DropDownWomen";
import styled from "./Navbar.module.css";
import "../App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className={styled.adidas_logo_div}>
        <Link className="navbar-brand" to="/">
          <img
            className={styled.adidas_logo}
            src="https://th.bing.com/th/id/R.538a97ef85939bfa20def9458cec6b40?rik=Hff6MEyu%2f5YuaQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-GuTpwHFekhY%2fUP_9SKEgSRI%2fAAAAAAAAIzs%2foWVyaAGJWnc%2fs1600%2fadidas-logo-centre1.PNG&ehk=4YAMZFbjpkM3UzF9vqzNeYtcGRhzUZpQ5jG%2bsyq0u5w%3d&risl=&pid=ImgRaw&r=0"
            alt="Logo"
          />
        </Link>
      </div>
      <div className={styled.DropDown_div}>
        <DropDownMen />
        <DropDownWomen />
        <DropDownKids />
        <DropDownOutlet />
        <DropDownBrands />
        <DropDownSports />
      </div>

      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div>
        <img src="" alt="Cart" />
        <img src="" alt="WishList" />
        <img src="" alt="Pro" />
      </div>
    </nav>
  );
};

export default Nav;
