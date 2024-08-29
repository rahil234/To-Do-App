import React from "react";
import TodoItem from "./../TodoItem/TodoItem";
import "./ToDoList.css";

function ToDoList({ todos, setTodos, setShowEditTodo, setEditTodo }) {
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (id, todo) => {
    setEditTodo({ id, text: todo.text });
    setShowEditTodo(true);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onEdit={() => handleEdit(todo.id, todo)}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
}

export default ToDoList;