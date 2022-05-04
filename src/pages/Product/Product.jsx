import React, { useEffect, useState } from "react";
import styled from "./Product.module.css";
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
  const productCard =() =>{
    console.log("Product card of product page")
  }
  return (
    <div className="nav-margin">
      <div className={styled.product_container}>
        {product.map((ele, index) => (
          <div className={styled.product_card} onClick={productCard}>
            <img src={ele.url} alt={ele.title} />
            <h5>{ele.title}</h5>
            <p>Price{ele.price}</p>
            <button>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
