import React, { useState } from "react";
import validator from "validator";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");

  const validate = (value) => {
    setPassword(value);
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("strong");
    } else {
      setErrorMessage("weak");
    }
  };

  return (
 /*  */   <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Password Strength Checker</h2>
        <div className="relative w-full">
          <input
            className="w-full p-3 rounded-lg border-2 border-gray-700 focus:border-blue-500 outline-none bg-gray-700 text-white"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => validate(e.target.value)}
          />
          <div className="absolute right-3 top-3">
            {errorMessage === "strong" ? (
              <span className="text-green-400 font-semibold">✔</span>
            ) : errorMessage === "weak" ? (
              <span className="text-red-400 font-semibold">✖</span>
            ) : null}
          </div>
        </div>
        <p
          className={`mt-3 font-semibold text-sm ${
            errorMessage === "strong" ? "text-green-400" : "text-red-400"
          }`}
        >
          {errorMessage === "strong"
            ? "Your password is strong."
            : errorMessage === "weak"
            ? "Your password is weak."
            : ""}
        </p>
      </div>
    </div>
  );
};
