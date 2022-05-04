import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoItems } from "../redux/actions";

const Searching = () => {
  const dispatch = useDispatch();
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const tasks = useSelector((store) => store.todos);
  console.log(filteredTasks);
  useEffect(() => {
    dispatch(getTodoItems());
  }, []);

  useEffect(() => {
    const newTodos = tasks.filter((task) => !task.isCompleted);
    setFilteredTasks(newTodos);
  }, [tasks]);

  const handleSearch = () => {
    let matchedItems;
    if (searchedValue !== "") {
      matchedItems = filteredTasks.filter((task) =>
        task.title.includes(searchedValue)
      );
    } else {
      matchedItems = tasks.filter((task) => !task.isCompleted);
    }
    setFilteredTasks(matchedItems);
  };

  return (
    <>
      <input
        type="text"
        value={searchedValue}
        onChange={(e) => setSearchedValue(e.target.value)}
      />
      <button onClick={() => handleSearch()}>+</button>
    </>
  );
};

export default Searching;
