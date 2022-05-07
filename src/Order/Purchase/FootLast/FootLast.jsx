import React from "react";
import styles from "./FootPur.module.css";
function FootLast() {
  return (
    <footer className={styles.footer__container}>
      <p className={styles.top}>
        | <a href="#">Privacy Statement</a> |{" "}
        <a href="#">Terms and Conditions</a>
      </p>
      <p className={styles.top}>
        © 2022 adidas India Marketing Private Limited
      </p>
    </footer>
  );
}

export default FootLast;
