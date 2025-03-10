import React, { useEffect, useState } from "react";

const MeColor = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (color) {
      document.body.style.backgroundColor = color;
    }
  }, [color]);

  return (
    <div className="space-x-3">
      <button
        onClick={() => setColor("green")}
        style={{ backgroundColor: "green" }}
        className="px-5 py-3 border rounded-md"
      >
        Green
      </button>

      <button
        onClick={() => setColor("blue")}
        style={{ backgroundColor: "blue" }}
        className="px-5 py-3 border rounded-md"
      >
        Blue
      </button>

      <button
        onClick={() => setColor("red")}
        style={{ backgroundColor: "red" }}
        className="px-5 py-3 border rounded-md"
      >
        Red
      </button>

      <button
        onClick={() => setColor("yellow")}
        style={{ backgroundColor: "yellow" }}
        className="px-5 py-3 border rounded-md"
      >
        Yellow
      </button>

      <button
        onClick={() => setColor("grey")}
        style={{ backgroundColor: "grey" }}
        className="px-5 py-3 border rounded-md"
      >
        Grey
      </button>
    </div>
  );
};

export default MeColor;
