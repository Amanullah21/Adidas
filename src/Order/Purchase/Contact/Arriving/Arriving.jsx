import React from "react";
import styles from "./Arriving.module.css";

function Arriving() {
  return (
    <div className={styles.div}>
      <div className={styles.arriving}>
        <h2>ARRIVING</h2> <div className={styles.questions}>?</div>
      </div>

      <div className={styles.box}>
        <div className={styles.standard}>
          <p className={styles.heading}>STANDARD DELIVERY</p>{" "}
          <p className={styles.highlight}>FREE</p>
        </div>

        <p>within 3-9 bussiness days</p>
      </div>
    </div>
  );
}

export default Arriving;
