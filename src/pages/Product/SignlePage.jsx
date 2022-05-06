import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SignlePage = () => {
  const { userId } = useParams();
  const [single, setSingle] = useState([]);

  const url = `http://localhost:8080/product/${userId}`;

  const getTodo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setSingle(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => getTodo(), []);

  return (
    <div>
        <h1>{single.title}</h1>
        <img src={single.url} alt="" />
      {/* {single.map((ele) => (
        <div>
          <h1>{ele.title}</h1>
          <h2>{ele.price}</h2>
          <img src={ele.url} alt={ele.title} />
        </div>
      ))} */}
    </div>
  );
};

export default SignlePage;
