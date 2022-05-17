import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "./Bag.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeToBag } from "../../../redux/actions";
const Bag = () => {

  const cartProducts = useSelector((store) => store.cartProducts);
  const [addItem, setAddItem] = useState(1);
  const [data,setData] = useState([])
  console.log(data)
  const handleDelete =(id)=>{
   dispatch(removeToBag(id))
  }

  console.log(addItem);
  const dispatch = useDispatch();
  return (
    <div className={styled.Bag_container}>
      <div>
        <h2>YOUR BAG</h2>
        <h6>{`Total (${cartProducts.length} item)`}</h6>
        <span>
          Items in your bag are not reserved — check out now to make them yours.
        </span>
      </div>
      <div className={styled.bagCard_container}>
        <div className={styled.bagCard}>
          {cartProducts.map((ele, index) => (
            <div className={styled.card}>
              <div>
                <img src={ele.url} alt={ele.title} />
              </div>
              <div>
                <h4>{ele.title}</h4>
                <p>Gender :{ele.gen}</p>
                <p>Cate :{ele.cate}</p>
                <p>Price :{ele.price * addItem}$</p>
                <input
                  type="number"
                  onChange={(e) => setAddItem(e.target.value)}
                />{" "}
                <br />
                <button
                  className={styled.resuble_button}
                  style={{
                    width:"100px",
                    marginTop:"20px"
                  }}
                  onClick={() => {
                    handleDelete(ele.id)
                    dispatch(removeToBag(ele.id));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <Link to="/purchase">
            <button
              className={styled.resuble_button}
              disabled={cartProducts.length === 0}
            >
              Checkout
            </button>
          </Link>
        </div>

        <div className={styled.orderSumery}>
          <Link to="/purchase">
            <button  className={styled.resuble_button}
              style={{
                width: "95%",
                marginLeft: "0px",
                marginBottom: "20px"
              }}
            >
              Checkout
            </button>
          </Link>
          <div
            style={{
              border: "2px solid white",
              padding: "20px",
            }}
          >
            <h4>ORDER SUMMARY</h4>
            <h6>{cartProducts.length} items</h6>
            <h6>Delivery free</h6>
            <h5>GST added</h5>
            <h3>
              {
                cartProducts.map((ele,index) =>(
                  <>{ele.price }$ </>
                ))
              }
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
