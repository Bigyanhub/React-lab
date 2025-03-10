import React from "react";

const Button = ({ callApi, disabled }) => {
  return (
    <button
      type="button"
      className={`inline-block px-5 py-2 bg-green-600 text-white border-none text-lg cursor-pointer rounded-lg transition-colors duration-500 hover:bg-green-300 active:bg-green-800 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={callApi}
      disabled={disabled}
    >
      {disabled ? "Loading..." : "Click to generate a joke."}
    </button>
  );
};

export default Button;
