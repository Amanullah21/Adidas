import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import CompletedTodos from '../components/CompletedTodos';

const Todo = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <CompletedTodos />
    </div>
  );
};

export default Todo;