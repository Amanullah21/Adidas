import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SignlePage = () => {
  const { userId } = useParams();
  const [single, setSingle] = useState([]);

  const url = `http://localhost:8080/book/${userId}`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => setSingle(res))
    .catch((error) => console.log(error));

  return (
    <div>
      {single.map((ele, index) => (
        <div>
            <img src={ele.url} alt="" />
            <h4>{ele.title}</h4>
            <p>{ele.price} $</p>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
};

export default SignlePage;
