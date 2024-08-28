import React, { useState, useEffect, useRef } from "react";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  const loadTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [todos, setTodos] = useState(loadTodos);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const inputRef = useRef(null);

  function addTodo() {
    setShowAddTodo(true);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (showAddTodo && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showAddTodo]);

  const closeAddTodo = () => {
    setShowAddTodo(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputRef.current.value.trim() !== "") {
      submitNewTodo();
    }
  };

  const submitNewTodo = () => {
    const todoText = inputRef.current.value;
    if (todoText.trim() !== "") {
      setTodos([
        { id: todos.length + 2, text: todoText, completed: false },
        ...todos,
      ]);
      inputRef.current.value = "";
      setShowAddTodo(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0e1c26]">
      <div
        className="border border-black rounded-2xl text-white mx-4 my-4 md:mx-auto md:my-4  md:w-5/12"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(30px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          display: "flex",
          flexDirection: "column",
          maxHeight: '95vh',
        }}
      >
        <div className="border-b border-gray-100 flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <img
              src="/logo1.jpeg"
              alt=""
              className="w-12 h-12 rounded-xl"
            />
            <h4 className="text-lg">ToDo</h4>
          </div>
          <button className="rounded-xl border px-3 py-2" onClick={addTodo}>
            Add
          </button>
        </div>

        <div
          className="flex-grow p-4 hide-scrollbar"
          style={{ overflowY: "auto" }}
        >
          <ToDoList todos={todos} setTodos={setTodos} />
        </div>
      </div>

      {showAddTodo && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-bold mb-4">Add a New Todo</h2>
            <input
              type="text"
              ref={inputRef}
              placeholder="Enter todo"
              className="border border-gray-300 rounded p-2 w-full mb-4"
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={submitNewTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            <button
              onClick={closeAddTodo}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;