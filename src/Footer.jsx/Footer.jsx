import React from "react";
import { Link } from "react-router-dom";
import styled from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styled.footer}>
      <div className={styled.footer_div}>
        <div>
          <h5>PRODUCTS</h5>
          <p>Footwere </p>
          <p>Clothing </p>
          <p>Accessories </p> <br />
          <p>Outlet-Sale </p>
          <p>New Arrivals </p>
        </div>
        <div>
          <h5>SPORTS</h5>
          <p>Running </p>
          <p>Football </p>
          <p>Gym/Training  </p> 
          <p>Tennis </p>
          <p>Basketball </p>
          <p>Swimming</p>
          <p>Skateboarding</p>
        </div>
        <div>
          <h5>COLLECTIONS</h5>
          <p>Ultraboost </p>
          <p>Suerstart </p>
          <p>NMD  </p> 
          <p>Stan Smith </p>
          <p>Sustanability </p>
          <p>Predator</p>
          <p>Parley</p>
          <p>Adicolor</p>
        </div>
        <div>
          <h5>SUPPORT</h5>
          <p>Help </p>
          <p>Customer Services </p>
          <p>Returns & Exchanges  </p> 
          <p>Shipping</p>
          <p>Order Tracker </p>
          <p>Store Locator</p>
          <p>Running Shoe Finder</p>
          <p>Adiclub</p>
        </div>
        <div>
          <h5>COMPANY</h5>
          <p>Abous us </p>
          <p>Adidas Apps </p>
          <p>Adidas Store  </p> 
          <p>Entity Detatils</p>
          <p>Press  </p>
          <p>Store Locator</p>
          <p>Carrers</p>
        </div>
        
      </div>
      <div className={styled.footer_bottom}></div>
    </div>
  );
};

export default Footer;
