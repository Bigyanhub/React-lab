import React, { useState } from "react";

const ReactNodeEasy = () => {
  const [mode, setMode] = useState("react");

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-300">
      <p className="font-bold text-2xl">
        <span
          onClick={() => setMode("react")}
          className="cursor-pointer px-2 text-blue-600"
        >
          React
        </span>
        |
        <span
          onClick={() => setMode("node")}
          className="cursor-pointer px-2 text-green-600"
        >
          Node  
        </span>
      </p>
      <div
        className={`bg-white p-6 h-80 rounded-lg w-96 text-center  
        ${mode === "react" ? "shadow-lg shadow-blue-500" : "shadow-lg shadow-green-500"}`}
      >
        {mode === "react" ? (
          <p>
            This is React stuff. React is a powerful JavaScript library for
            building user interfaces, particularly for single-page
            applications. It allows developers to create reusable components,
            manage state efficiently, and enhance user experiences with
            declarative UI updates.
          </p>
        ) : (
          <p>
            This is Node stuff. Node.js is a runtime environment that allows
            JavaScript to run on the server side. It is widely used for
            building scalable backend applications, handling asynchronous
            operations efficiently, and enabling full-stack JavaScript
            development.
          </p>
        )}
      </div>
    </div>
  );
};

export default ReactNodeEasy;
