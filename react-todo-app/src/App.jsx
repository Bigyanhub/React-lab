import { useState } from "react";

function App() {
  // STATE
  const [todos, setTodos] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  // HANDLERS

  // Open popup for a NEW todo
  const handleOpenAddPopup = () => {
    setTitle("");
    setDescription("");
    setIsImportant(false);
    setEditTodoId(null);
    setShowPopup(true);
  };

  // Open popup for EDIT
  const handleEditClick = (id) => {
    const todoToEdit = todos.find((t) => t.id === id);
    if (!todoToEdit) return;

    setTitle(todoToEdit.title);
    setDescription(todoToEdit.description);
    setIsImportant(todoToEdit.important);
    setEditTodoId(id);
    setShowPopup(true);
  };

  // Add or Edit submit
  const handleAddOrEditTodo = () => {
    if (editTodoId) {
      // EDIT EXISTING
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editTodoId
            ? {
                ...todo,
                title,
                description,
                important: isImportant,
              }
            : todo
        )
      );
      setEditTodoId(null);
    } else {
      // ADD NEW
      const newTodo = {
        id: Date.now(),
        title,
        description,
        important: isImportant,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    // Clear form & close
    setTitle("");
    setDescription("");
    setIsImportant(false);
    setShowPopup(false);
  };

  // DELETE
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // RENDER
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      {/* Header / Search / Add button */}
      <div className="max-w-3xl mx-auto mb-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 p-2 rounded w-1/2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleOpenAddPopup}
          >
            Add
          </button>
        </div>
      </div>

      {/* Todo List (3 columns max) */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {todos
          .filter((todo) =>
            todo.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((todo) => (
            <div
              key={todo.id}
              className={`rounded-lg shadow-md p-4 transition ${
                todo.important ? "bg-yellow-100" : "bg-white"
              }`}
            >
              <h3 className="font-bold text-lg mb-1">{todo.title}</h3>
              <p className="mb-3 text-gray-700">{todo.description}</p>
              <div className="flex gap-2">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => handleEditClick(todo.id)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Popup (Modal) */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h2 className="text-xl font-semibold mb-4">
              {editTodoId ? "Edit Todo" : "Add Todo"}
            </h2>

            {/* Title input */}
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-300 p-2 rounded w-full mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Description input */}
            <textarea
              placeholder="Description"
              className="border border-gray-300 p-2 rounded w-full mb-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {/* Important toggle */}
            <div className="flex items-center mb-4">
              <input
                id="importantCheckbox"
                type="checkbox"
                className="mr-2"
                checked={isImportant}
                onChange={(e) => setIsImportant(e.target.checked)}
              />
              <label htmlFor="importantCheckbox">Important?</label>
            </div>

            <div className="flex gap-2 justify-end">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleAddOrEditTodo}
              >
                {editTodoId ? "Update" : "Submit"}
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
