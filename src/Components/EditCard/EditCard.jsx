import React from "react";

function EditCard({
  setShowEditTodo,
  todos,
  editTodo,
  setTodos,
  inputEditRef,
}) {
  const submitEditTodo = () => {
    const newValue = inputEditRef.current.value.trim();
    if (newValue === "") {
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.id === editTodo.id ? { ...todo, text: newValue } : todo
      )
    );
    setShowEditTodo(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputEditRef.current.value.trim() !== "") {
      submitEditTodo();
    }

    if (event.key === "Escape") {

      setShowEditTodo(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-lg font-bold mb-4">Edit Todo</h2>
        <input
          type="text"
          ref={inputEditRef}
          placeholder="Enter todo"
          defaultValue={editTodo.text}
          className="border border-gray-300 rounded p-2 w-full mb-4"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={submitEditTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
        <button
          onClick={() => setShowEditTodo(false)}
          className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditCard;
