import React, { useState } from 'react';

const Color = () => {
  const [color, setColor] = useState("");

  const changeColor = (color) => {
    setColor(color); 
  };

  React.useEffect(() => {
    if (color) {
      document.body.style.backgroundColor = color;
    }
  }, [color]);

  return (
    <>
      <button onClick={() => changeColor("blue")}>Blue</button>
      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("orange")}>Orange</button>
      <button onClick={() => changeColor("yellow")}>Yellow</button>
      <button onClick={() => changeColor("green")}>Green</button>
    </>
  );
};

export default Color;
