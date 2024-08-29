

function AddCard({setShowAddTodo, inputAddRef, submitNewTodo }) {
    
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && inputAddRef.current.value.trim() !== "") {
        submitNewTodo();
      }
      if (event.key === "Escape") {
        setShowAddTodo(false);
      }
    };
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-11/12 md:w-1/2 lg:w-1/3">
          <h2 className="text-lg font-bold mb-4">Add a New Todo</h2>
          <input
            type="text"
            ref={inputAddRef}
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
            onClick={() => setShowAddTodo(false)}
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }


  export default AddCard;