import React from "react";
import { Col, Container } from "react-bootstrap";
import "./FootSmall.css";
function FootSmall() {
  return (
    <div className="small-bot">
      <Col>
        <li>Delivery</li>
        <li>Order Tracker</li>
        <li>Store Finder</li>
        <li>adiclub terms and conditions</li>
      </Col>
      <Col>
        <li>Returns &amp; Refunds</li>
        <li>Help</li>
        <li>adiclub</li>
      </Col>
    </div>
  );
}

export default FootSmall;
