import React, { useState } from "react";
import "./Top.css";

import styled from "../Navbar.module.css"

import Modal from "react-modal";
import { Link } from "react-router-dom";
import { ImCreditCard } from "react-icons/im";
function Top() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [signUp,setSignup] = useState(false)
  return (
    <div className="top-banner">
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
        </div></div>
    </div>
  );
}

export default Top;
