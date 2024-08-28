import React from "react";
import TodoItem from "./../TodoItem/TodoItem";
import "./ToDoList.css";

function ToDoList({todos, setTodos}) {

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {/* <AddTodo onAdd={handleAddTodo} /> */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
}

export default ToDoList;
