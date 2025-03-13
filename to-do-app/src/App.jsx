import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Example() {
  // STATE
  const [showPopup, setShowPopup] = useState(false);

  // Open popup
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      {/* Header / Add button */}
      <div className="max-w-3xl mx-auto mb-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
        <div className="flex justify-center gap-2">
          <div className="flex ">
            <div className="flex items-center border border-gray-300 rounded w-1/2 p-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none px-2"
              />
              <CiSearch className="text-gray-500 text-2xl ml-1" />
            </div>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleOpenPopup}
          >
            Add
          </button>
        </div>
      </div>

      {/* Popup (Modal) */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h2 className="text-xl font-semibold mb-4">Add/Edit Todo</h2>

            {/* Title input */}
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-300 p-2 rounded w-full mb-2"
            />

            {/* Description input */}
            <textarea
              placeholder="Description"
              className="border border-gray-300 p-2 rounded w-full mb-2"
            />

            {/* Important toggle */}
            <div className="flex items-center mb-4">
              <input id="importantCheckbox" type="checkbox" className="mr-2" />
              <label htmlFor="importantCheckbox">Important?</label>
            </div>

            <div className="flex gap-2 justify-end">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Submit
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

export default Example;
