import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";
function Footer() {
  return (
    <Fragment>
      <Container className="footer-top">
        <Col>
          <li className="heading-foot">PRODUCTS</li>
          <Row>
            <li>Footwear</li>
            <li>Clothing</li>
            <li>Accesoruies</li>
          </Row>

          <Row className="margin-gap-foot">
            {" "}
            <li>Outlet - Sale</li>
            <li>New Arrivals</li>
          </Row>
        </Col>
        <Col>
          <li className="heading-foot">SPORTS</li>
          <li>Running </li>
          <li>Football</li>
          <li>Gym/Training</li>
          <li>Tennis</li>
          <li>Outdoor</li>
          <li>Basketball</li>
          <li>Swimming</li>
          <li>Skateboarding</li>
        </Col>
        <Col>
          <li className="heading-foot">COLLECTIONS</li>
          <li>Coltraboost</li>
          <li>Superstar</li>
          <li>NMD</li>
          <li>Stan Smith</li>
          <li>Sustainabilty</li>
          <li>Predator</li>
          <li>Parley</li>
          <li>adicolor</li>
        </Col>
        <Col>
          <li className="heading-foot">SUPPORT</li>
          <li>Help</li>
          <li>Customer Service</li>
          <li>Returns &amp; Exchanges</li>
          <li>Shipping</li>
          <li>Order Tracker</li>
          <li>Store Locator </li>
          <li>Running Show Finder</li>
          <li>Bra Fit Guide</li>
          <li>adiclub</li>
          <li>adiclub Terms and conditions</li>
        </Col>
        <Col>
          <li className="heading-foot">COMPANY INFO</li>
          <li>About Us</li>
          <li>adidas stories</li>
          <li>adidas Apps</li>
          <li>Entity Details</li>
          <li>Press</li>
          <li>Careers</li>
        </Col>
      </Container>
    </Fragment>
  );
}

export default Footer;
