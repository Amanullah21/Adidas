import React from "react";
import styled from "./Filter.module.css";

const Filter = () => {
  return (
    <>
      <div className={styled.xyz}>
        <div class="dropdown">
          <h5 class="dropbtn">Sort by :</h5>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
