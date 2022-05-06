import React from "react";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./NewNav.css";
function NewNav() {
  return (
    <nav className="new-nav-responsive">
      <div className="toggle-nav-icon">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <Link to={"/"}>
          <img
            className="image-adidas size-small"
            src="./Adidas_logo.png"
            alt="adidas"
          />
        </Link>
      </div>
      <div>
        <ul className="icon-link-nav">
          <li className="icon-link">
            <a href="#">
              <AiOutlineUser />
            </a>
          </li>
          <li className="icon-link">
            <a href="#">
              <FiHeart />
            </a>
          </li>
          <li className="icon-link">
            <a href="#">
              <AiOutlineShopping />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NewNav;
