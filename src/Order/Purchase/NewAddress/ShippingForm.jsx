import React, { Fragment, useState } from "react";
import styles from "./ShippingForm.module.css";
import LoggedIn from "./LoggedIn/LoggedIn";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { } from "react-router-dom"
 function ShippingForm() {
  const intialState = {
    first_name: "",
    last_name: "",
    address: "",
    additional_info: "",
    pincode: "",
    state: "",
    city: "",
    landmark: "",
    email:"",
    number:"",
  };
  const [shipping, setShipping] = useState(intialState);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setShipping({
      ...shipping,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const url ="https://adidas-db.herokuapp.com/buyer"
  function submitHandler(e) {
    e.preventDefault();
    console.log(shipping);
    
    fetch(url, {
      method: "POST",
      body: JSON.stringify(shipping),
      headers: {
        "content-type": "application/json",
      },
    }).then((ele) => navigate("/payment"))
    
    setShipping(intialState);
  }
  // console.log(shipping)
  const {
    first_name,
    last_name,
    address,
    additional_info,
    pincode,
    state,
    city,
    landmark,
    email,
    number,
  } = shipping;
  return (
    <Fragment>
      <LoggedIn />
      <h2 className={styles.heading}>SHIPPING ADDRESS</h2>
      <form className={styles.form_flex} onSubmit={submitHandler}>
        <div className={styles.left_right}>
          <input
            type="text"
            placeholder="First Name *"
            className={styles.input_name}
            name="first_name"
            value={first_name}
            onChange={changeHandler}
            required
          />
          
          <input
            type="text"
            placeholder="Last Name *"
            className={styles.input_name}
            name="last_name"
            value={last_name}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.left_right}>
        <input
              className={styles.input_name}
              type="text"
              name="email"
              value={email}
              placeholder="Email *"
              onChange={changeHandler}
            />
          
          <input
              className={styles.input_name}
              type="number"
              name="number"
              value={number}
              placeholder="Mobile Number *"
              onChange={changeHandler}
            />
        </div>
        <div className={styles.div}>
          <input
            type="text"
            placeholder="Street Address *"
            className={styles.input_address}
            name="address"
            value={address}
            onChange={changeHandler}
            required
          />
          <div htmlFor="address">E.g. 3 Stripes Street</div>
        </div>
        <div className={styles.div}>
          <input
            type="text"
            placeholder="Landmark *"
            className={styles.input_address}
            name="landmark"
            value={landmark}
            onChange={changeHandler}
            required
          />
          <div htmlFor="landmark">E.g. Company, Apartment, Building, etc.</div>
        </div>

        <div className={styles.left_right}>
          <input
            type="text"
            placeholder="Additional info"
            className={styles.input_name}
            name="additional_info"
            value={additional_info}
            onChange={changeHandler}
            required
          />
          <input
            type="text"
            placeholder="City *"
            className={styles.input_name}
            name="city"
            value={city}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.left_right}>
          <select
            name="state"
            id="state-shipping"
            className={`${styles.input_name} ${styles.input_select}`}
            value={state}
            onChange={changeHandler}
            required
          >
            <option value="" defaultValue disabled hidden>
              State *
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          <input
            type="number"
            placeholder="Pin Code *"
            className={styles.input_name}
            name="pincode"
            value={pincode}
            onChange={changeHandler}
            required
          />
        </div>
        <input type="submit" value={"Button"} className="resuble_button" style={{
          width:"690px",
          marginLeft:"130px"
        }}/>
      </form>
      <div className={styles.span}>
        {" "}
        <span>Country:</span>
        <span>India</span>
      </div>
    </Fragment>
  );
}

export default ShippingForm;
