import React from "react";
import styles from "./NavPur.module.css";
import adidas from "../../../Image/adidas.png";
import { CgSmartphone } from "react-icons/cg";
import { Link } from "react-router-dom";
function NavPur() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__top}>
        <div className={styles.div__image}>
          <img className={styles.image} src={adidas} alt="adidas" />
        </div>
        <div className={styles.information}>
          <div className={styles.left}>
            <CgSmartphone /> QUESTIONS? 1800-120-3300
          </div>
          <div className={styles.right}>8AM - 8PM, 7 days Link week</div>
        </div>
      </div>
      <div className={styles.nav__bottom}>
        <div className={`${styles.crumbs} `}>
          <div className={`${styles.serial} ${styles.active}`}>1</div>
          <Link to="/bag">BAG</Link>
        </div>
        <div className={`${styles.crumbs}  ${styles.active}`}>
          <div className={`${styles.serial}  ${styles.active}`}>2</div>
          <Link to="/purchase">DELIVERY</Link>
        </div>
        <div className={`${styles.crumbs}`}>
          <div className={`${styles.serial} ${styles.active}`}>3</div>
          <Link to="/payment">PAYMENT</Link>
        </div>
        <div className={`${styles.crumbs}`}>
          <div className={`${styles.serial} ${styles.active}`}>4</div>
          <Link to="/complete">ORDER COMPLETE</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavPur;
