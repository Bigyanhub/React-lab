import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4">SignUp</h2>

        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />

        {/* Remember me toggle */}
        <div className="flex items-center mb-4">
          <input id="rememberMeCheckbox" type="checkbox" className="mr-2" />
          <label htmlFor="rememberMeCheckbox">Remember Me</label>
        </div>

        <div className="flex gap-2 justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            SignUp
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
