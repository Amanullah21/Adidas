import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "../Product/Product.module.css";
import { addingToBag } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Women = () => {
  const [product, setProduct] = useState([]);
  let url = "https://adidas-db.herokuapp.com/product?gen=female";
  const getTodo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.log(error));
  };
  const productCard = () => {
    console.log("Product card of product page");
  };

  useEffect(() => getTodo(), []);

  const dispatch = useDispatch();

  const addtobag = (item) => {
    alert("Check Cart")
    dispatch(addingToBag(item));
  };


  return (
    <div className="nav-margin">
      <div className={styled.product_filter}>
        <h2
          style={{
            paddingLeft: "20px",
          }}
        >
          it is women page Women
        </h2>
      </div>
      <div className={styled.product_container}>
        {product.map((ele, index) => (
          <div className={styled.productcard_container}>
            <div className={styled.product_card} onClick={productCard}>
              <Link to={`/product/${index + 1}`}>
                <img src={ele.url} alt={ele.title} />
              </Link>
              <h5>{ele.title}</h5>
              <span>Gander : {ele.gen}/</span>
              <span>{ele.cate}</span>
              <p>Price : $ {ele.price} </p>
            </div>

            <button onClick={() => addtobag(ele)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
