import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Modal from "react-modal";
import styled from "./Product.module.css";
import Filter from "./Filter";
const Product = () => {
  const [product, setProduct] = useState([]);
  const url = "http://localhost:8080/product";
  const getTodo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => getTodo(), []);
  const productCard = () => {
    console.log("Product card of product page");
  };
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div className="nav-margin">
      <div className={styled.product_filter}>
        <h2>All Product</h2>
        <button onClick={() => setFilterOpen(true)}>
          <span>Fliter & Sort</span>
          <img src="" alt="lcon" />
        </button>

        <Modal className={styled.filter_modal_background} isOpen={filterOpen}>
        <div className={styled.Modal_div}>
           
           <h4> Filter & Sort</h4>
           <Link to="/"><span>Clear All</span></Link>
           <button
             onClick={() => setFilterOpen(false)}
             className={styled.cut_btn}
           >
             X
           </button>
         </div>
         <hr />
          <Filter/>
        </Modal>
      </div>

      <hr />
      <hr />
      <hr />

      <div className={styled.product_container}>
        {product.map((ele, index) => (
          <Link to={`/product/${index + 1}`}>
            <div className={styled.product_card} onClick={productCard}>
              <img src={ele.url} alt={ele.title} />
              <h5>{ele.title}</h5>
              <p>Price{ele.price}</p>
              <button>+</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
