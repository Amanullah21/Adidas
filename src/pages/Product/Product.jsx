import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Modal from "react-modal";
import styled from "./Product.module.css";
import Filter from "./Filter";
import { addingToBag } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Product = () => {
  const [product, setProduct] = useState([]);
  let url = "https://adidas-db.herokuapp.com/product";
  const getTodo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => getTodo(), []);


  
  const dispatch = useDispatch();

 

  

  const addtobag = (item) => {
    dispatch(addingToBag(item));
  };
  const productCard = () => {
    console.log("Product card of product page");
  };

  const sortedDataPriceLow = () => {
    let url = "https://adidas-db.herokuapp.com/product?_sort=price&_order=asc";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.log(error));
  };
  const sortedDataNewest = () => {
    let url = "https://adidas-db.herokuapp.com/product?_sort=date&_order=asc";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.log(error));
  };
  const sortedDataPriceHigh = () => {
    let url = "https://adidas-db.herokuapp.com/product?_sort=price&_order=desc";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.log(error));
  };

  const shoescat = () => {
    console.log("check");
    let url = "https://adidas-db.herokuapp.com/product?cate=shoes";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.log(error));
  };

  const clothcat = () => {
    let url = "https://adidas-db.herokuapp.com/product?cate=cloth";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.log(error));
  };
  const maleFilter = () => {
    let url = "https://adidas-db.herokuapp.com/product?gen=male";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.log(error));
  };
  const femaleFilter = () => {
    let url = "https://adidas-db.herokuapp.com/product?gen=female";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.log(error));
  };

  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="nav-margin">
      <div className={styled.product_filter}>
        <h2 style={{
          paddingLeft:"20px"
        }}>All Product</h2>
        <button className={styled.filter} onClick={() => setFilterOpen(true)}>
          <span>Fliter & Sort</span>
          <img
            style={{
              height: "30px",
            }}
            src="https://cdn.icon-icons.com/icons2/1993/PNG/512/filter_filters_funnel_list_navigation_sort_sorting_icon_123212.png"
            alt="lcon"
          />
        </button>

        <Modal className={styled.filter_modal_background} isOpen={filterOpen}>
          <div className={styled.Modal_div}>
            <h4> Filter & Sort</h4>
            <Link to="/">
              <span>Clear All</span>
            </Link>
            <button
              onClick={() => setFilterOpen(false)}
              className={styled.cut_btn}
            >
              X
            </button>
          </div>
          <hr />
          <div className={styled.xyz}>
            <div class="dropdown">
              <h5 class="dropbtn">Sort by :</h5>
              <div class="dropdown-content">
                <p onClick={sortedDataPriceLow}>Price (low to high)</p>
                <p onClick={sortedDataNewest}>Newest Product</p>
                <p onClick={sortedDataPriceHigh}>Price (high To low)</p>
              </div>
            </div>
            <div class="dropdown">
              <h5 class="dropbtn">DIVISION</h5>
              <div className={styled.first}>
                <input
                  type="checkbox"
                  name="category"
                  value="shoes"
                  onChange={shoescat}
                />
                <label htmlFor="Straighteners">Shoes</label>
              </div>
              <div className={styled.first}>
                <input
                  type="checkbox"
                  name="category"
                  value="cloth"
                  onChange={clothcat}
                />
                <label htmlFor="Straighteners">Clothing</label>
              </div>
              <div className={styled.first}>
                <input type="checkbox" name="category" value="accessories" />
                <label htmlFor="Straighteners">Accessories</label>
              </div>
            </div>

            <div class="dropdown">
              <h5 class="dropbtn">Gender</h5>
              <div className={styled.first}>
                <input
                  type="checkbox"
                  name="gender"
                  value="male"
                  onChange={maleFilter}
                />
                <label htmlFor="Straighteners">Male</label>
              </div>
              <div className={styled.first}>
                <input
                  type="checkbox"
                  name="gender"
                  value="female"
                  onClick={femaleFilter}
                />
                <label htmlFor="Straighteners">Female</label>
              </div>
              <div className={styled.first}>
                <input type="checkbox" name="gender" value="kids" />
                <label htmlFor="Straighteners">Kids</label>
              </div>
            </div>
          </div>
        </Modal>
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

export default Product;
