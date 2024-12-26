import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <>
      <h1 className="text-white text-3xl">Learning Redux Toolkit</h1>
      <AddTodo />
      <ListTodos />
    </>
  );
}

export default App;
