import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions";

const Login = () => {
  const [userName, setUserName] = useState("");
  const { userDetails } = useSelector((store) => store);
  console.log(userDetails.email);
  const dispatch = useDispatch();
  // GET /posts?title=json-server&author=typicode
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/users?userName=${userName}`).then((res) => {
      console.log("login");
    });
  };

  return (
    <div className="nav-margin">
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <input
          name="Username"
          type="text"
          placeholder="Enter username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input type="submit" value="LOGIN" disabled={userName === ""} />
      </form>
    </div>
  );
};

export default Login;
