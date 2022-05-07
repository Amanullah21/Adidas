import React from "react";
import Shipping from "./NewAddress/ShippingForm";
import NavPur from "./NavPur/NavPur";
import Contact from "./Contact/Contact";
import "./Purchase";
function Purchase() {
  return (
    <div className="purchase_container">
      <NavPur />
      <Shipping />
      <Contact />
      
    </div>
  );
}

export default Purchase;
