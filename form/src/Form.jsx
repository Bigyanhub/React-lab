import React, { useState } from 'react';

const Form = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement=()=>{
    setCount(count - 1);
  }  
  return (
    <>
      {count !== 0 && (
        <button onClick={decrement}>-</button>
      )}
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
    </>
  );
};

export default Form;
