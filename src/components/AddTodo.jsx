import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoItems } from "../redux/actions";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [newItemText, setNewItemText] = useState("");
  const userName = useSelector((store) => store.userDetails.userName);

  const handleSubmit = () => {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newItemText,
        userID: userName,
        isCompleted: false,
      }),
    }).then(() => {
      dispatch(getTodoItems());
    });
  };

  return (
    <div style={{ margin: "3rem", border: "1px solid red" }}>
      <input type="text" onChange={(e) => setNewItemText(e.target.value)} />
      <button onClick={() => handleSubmit()}>Add New item</button>
    </div>
  );
};

export default AddTodo;
