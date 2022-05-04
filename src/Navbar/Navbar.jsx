import React, { useState } from "react";
import styled from "./Navbar.module.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import DropDownMen from "./DropDownMen";
import DropDownWomen from "./DropDownWomen";
import DropDownKids from "./DropDownKids";
import DropDownOutlet from "./DropDownOutlet";
import DropDownBrands from "./DropDownBrands";
import DropDownSports from "./DropDownSports";
import { BsBag } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";
import Searching from "../components/Searching";
import SignUp from "../pages/SignUp/SignUp";

import styled1 from "../pages/SignUp/SignUp.module.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [signUp,setSignup] = useState(false)

  const wishList = 0;
  const cart = 0;
  return (
    <div className={styled.nav}>
      <div className={styled.top_nav}>
        <div>
          <p onClick={() => setIsOpen(true)} className={styled.blue}>
            SIGN UP & GET 15% OFF
          </p>
          <Modal className={styled.modal_background} isOpen={isOpen}>
            <button onClick={() => setIsOpen(false)} className={styled.btn}>
              X
            </button>
            <h3> SIGNUP & GET 15% OFF</h3>
            <p>Get 15% off on purchase of INR 1500 or more.</p>
          </Modal>
        </div>

        <div>
          <p onClick={() => setIsOpen1(true)} className={styled.blue}>
            FREE DELIVERY FOR ALL ORDERS NOW
          </p>
          <Modal className={styled.modal_background} isOpen={isOpen1}>
            <button onClick={() => setIsOpen1(false)} className={styled.btn}>
              x
            </button>
            <h3>FREE SHIPPING FOR ALL ORDERS NOW</h3>
            <p>
              For all orders, shipping is offered for free <br />
              Check out our delivery Terms & Conditions for more details.
            </p>
          </Modal>
        </div>
        <div>
          <p onClick={() => setIsOpen2(true)} className={styled.blue}>
            FREE RETURNS
          </p>
          <Modal className={styled.modal_background} isOpen={isOpen2}>
            <button onClick={() => setIsOpen2(false)} className={styled.btn}>
              X
            </button>
            <h3>FREE RETURNS</h3>
            <p>
              Try it on at home. Not the right size or colour? No problem.
              Return for free within 30 days.
            </p>
            <p>
              If you need help re-purchasing, please contact our customer
              service team here.
            </p>
            <p>Check out our Return Policy for more details.</p>
          </Modal>
        </div>
      </div>

      <div className={styled.botton_nav}>
        <div className={styled.topBox}>
          <Link to="/login">Login</Link>
          <Link to="/" onClick={() =>setSignup(true)}>SignUp</Link>
          <Modal className={styled1.modal_background} isOpen={signUp}>
          <button onClick={() => setSignup(false)} className={styled1.btn}>
            X
          </button>
          <SignUp/>
          </Modal>
          <Link to="/">Order Tracker</Link>
          <Link to="/">Returns</Link>
          <Link to="/">Help</Link>
        </div>
        <div className={styled.topBottom}>
          <div className={styled.adidas_logo_div}>
            <Link to="/">
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
          <div className={styled.Searching_div}>
            <Searching />
            <Link to="/">
              <img
                src="https://cdn.onlinewebfonts.com/svg/img_264204.png"
                alt="WishList"
              />
            </Link>
            <Link to="/">
              <img
                src="https://cdn.onlinewebfonts.com/svg/img_355961.png"
                alt="WishList"
              />
            </Link>
            <Link to="/">
              <img
                src="https://th.bing.com/th/id/R.654394c565e49920eeb263139c647751?rik=I%2bsGFDd8tc3PZw&riu=http%3a%2f%2fwebiconspng.com%2fwp-content%2fuploads%2f2016%2f11%2fbag_basket_buy_cart_luggage_shopping_suitcase_icon_1540167.png&ehk=P5ta1lkuuf82jRn6Cv79KFsOs4E2uVs6ZsTvmvGXtGI%3d&risl=&pid=ImgRaw&r=0"
                alt="cart"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
