import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const { userDetails } = useSelector((store) => store);
  console.log(userDetails.email)
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/users?email=${userEmail}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          dispatch(login(userEmail));
        }
      });
  };

  return (
    <div className="nav-margin">
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <input
          name="email"
          type="text"
          placeholder="Enter username"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input type="submit" value="LOGIN" disabled={setUserEmail === ""} />
      </form>
    </div>
  );
};

export default Login;
