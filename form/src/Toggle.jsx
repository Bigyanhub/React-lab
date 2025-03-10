import React, { useState, useEffect } from "react";

const Toggle = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark((prevState) => !prevState);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "black" : "white";
  }, [isDark]);

  return (
    <div className="flex justify-end items-start h-screen">
      <button
        className="px-5 py-3 text-white font-semibold rounded-lg transition-all duration-300"
        style={{ backgroundColor: isDark ? "#grey" : "#4CAF50" }}
        onClick={handleToggle}
      >
        {isDark ? "Light Mode☀" : "Dark Mode🌑"}
      </button>
    </div>
  );
};

export default Toggle;
