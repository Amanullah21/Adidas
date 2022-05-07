import React, { useState } from "react";
import styles from "./Contact.module.css";
import Arriving from "./Arriving/Arriving";

const init = {
  email: "",
  number: "",
};
function Contact() {
  const [data, setData] = useState(init);
  const dataHandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  console.log(data)
  return (
    <>
      <Arriving />
      <section className={styles.contact__section}>
        <h2 className={styles.heading}>CONTACT INFORMATION</h2>
        <p>We'll use these details to keep you informed on your delivery.</p>
        <form className={styles.form}>
          <div>
            {" "}
            <input
              className={styles.input_name}
              type="text"
              name="email"
              value={data.email}
              placeholder="Email *"
              onChange={dataHandle}
            />
          </div>
          <div>
            <input
              className={styles.input_name}
              type="number"
              name="number"
              value={data.number}
              placeholder="Mobile Number *"
              onChange={dataHandle}
            />{" "}
            <div className={styles.extra} htmlFor="number">
              We will only call you if there are questions regarding your order.
            </div>
          </div>

          <div>
            {" "}
            <input
              className={styles.checkbox}
              onChange={dataHandle}
              type="checkbox"
              name="billing"
              value={data.billing}
              id="billing"
            />
            <label htmlFor="billing">
              My billing and delivery information are the same.
            </label>
          </div>
          <div>
            {" "}
            <input
              className={styles.checkbox}
              type="checkbox"
              name="update"
              value={data.update}
              id="update"
              onChange={dataHandle}
            />
            <label htmlFor="billing">
              I would like to stay upto date. <a href="#">Read more.</a>
            </label>
          </div>
          <div>
            {" "}
            <input
              className={styles.checkbox}
              type="checkbox"
              name="old"
              value={data.old}
              onChange={dataHandle}
              id="old"
            />
            <label htmlFor="billing">
              Yes, I am over 18 years old &nbsp; accept the
              <a href="#">Terms &nbsp; Conditions</a> and
              <a href="#">Privacy Policy</a>.{" "}
            </label>
          </div>
          <div className={styles.button_container}>
            <div className={styles.button}>
              <input className="resuble_button" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
