import React from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="custom-checkbox"
        style={{ marginRight: "10px" }}
      />

      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          flex: 1,
        }}
      >
        {todo.text}
      </span>
      <button
        className="rounded-lg border-2 p-2 border-gray-500"
        onClick={() => onEdit(todo.id,todo.text)}
        style={{ marginLeft: "10px" }}
      >
        Edit
      </button>
      <button
        className="rounded-lg border-2 p-2 border-gray-500"
        onClick={() => onDelete(todo.id)}
        style={{ marginLeft: "10px" }}
      >
        delete
      </button>
    </div>
  );
}

export default TodoItem;
