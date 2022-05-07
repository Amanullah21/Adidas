import React from "react";
import styles from "./LoggedIn.module.css";
function LoggedIn() {
  return (
    <div className={styles.div_flex}>
      <div className={styles.heading}>Welcome Back , Amanullah </div>
      <div className={styles.heading_two}>
        {" "}
        Great to see you again - let's get your delivery sorted...
      </div>
    </div>
  );
}

export default LoggedIn;
