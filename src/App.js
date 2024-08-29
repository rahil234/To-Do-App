import React, { useState, useEffect, useRef } from "react";
import ToDoList from "./Components/ToDoList/ToDoList";
import AddCard from "./Components/AddCard/AddCard";
import EditCard from "./Components/EditCard/EditCard";

function App() {
  //to load todos from localStorage if available else []
  const loadTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [todos, setTodos] = useState(loadTodos);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [showEditTodo, setShowEditTodo] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const inputAddRef = useRef(null);
  const inputEditRef = useRef(null);

  //side effect to store todos in localstorage if todos changed
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //sideEffect to focus on input field when shoAddTodo changed
  useEffect(() => {
    if (showAddTodo && inputAddRef.current) {
      inputAddRef.current.focus();
    }
  }, [showAddTodo]);

  //sideEffect to focus on input field when shoEditTodo changed
  useEffect(() => {
    if (showEditTodo && inputEditRef.current) {
      inputEditRef.current.focus();
    }
  }, [showEditTodo]);

  //function to add todo if not empty
  const submitNewTodo = () => {
    const todoText = inputAddRef.current.value;
    if (todoText.trim() !== "") {
      setTodos([
        { id: todos.length + 1, text: todoText, completed: false },
        ...todos,
      ]);
      inputAddRef.current.value = "";
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
          maxHeight: "95vh",
        }}
      >
        <div className="border-b border-gray-100 flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <img
              src={process.env.PUBLIC_URL + "/logo.jpeg"}
              alt="logo"
              className="w-12 h-12 rounded-xl"
            />
            <h2 className="text-lg font-bold">ToDo</h2>
          </div>
          <button
            className="rounded-xl border px-3 py-2"
            onClick={() => setShowAddTodo(true)}
          >
            Add
          </button>
        </div>

        <div
          className="flex-grow p-4 hide-scrollbar"
          style={{ overflowY: "auto" }}
        >
          <ToDoList
            todos={todos}
            setTodos={setTodos}
            setShowEditTodo={setShowEditTodo}
            setEditTodo={setEditTodo}
            inputEditRef={inputEditRef}
          />
        </div>
      </div>

      {/* component to add new todo */}
      {showAddTodo && (
        <AddCard
          setShowAddTodo={setShowAddTodo}
          submitNewTodo={submitNewTodo}
          inputAddRef={inputAddRef}
        />
      )}
      {/* component to add new todo */}
      {showEditTodo && (
        <EditCard
          setTodos={setTodos}
          setShowEditTodo={setShowEditTodo}
          editTodo={editTodo}
          inputEditRef={inputEditRef}
          todos={todos}
        />
      )}
    </div>
  );
}

export default App;
