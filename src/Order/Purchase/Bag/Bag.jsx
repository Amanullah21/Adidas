import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "./Bag.module.css";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeToBag } from "../../../redux/actions";
const Bag = () => {
  // const [price1, setPrice1] = useState(1);
  const cartProducts = useSelector((store) => store.cartProducts);
  const [addItem, setAddItem] = useState(1);
  const [data,setData] = useState([])
  const getTodo = () => {
    fetch("http://localhost:8080/cartProducts")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => getTodo(), []);
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/cartProducts/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then(() => getTodo());
  };

  console.log(addItem);
  const dispatch = useDispatch();
  return (
    <div className={styled.Bag_container}>
      <div>
        <h2>YOUR BAG</h2>
        <h6>{`Total (${data.length} item)`}</h6>
        <span>
          Items in your bag are not reserved — check out now to make them yours.
        </span>
      </div>
      <div className={styled.bagCard_container}>
        <div className={styled.bagCard}>
          {data.map((ele, index) => (
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
              disabled={data.length === 0}
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
            <h6>{data.length} items</h6>
            <h6>Delivery free</h6>
            <h5>GST added</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
