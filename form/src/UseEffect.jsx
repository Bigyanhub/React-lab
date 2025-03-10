import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  // settig up useState with 0 as initial value
  const[count, setCount] = useState(0);
  // function to increase the count
  const increase = () =>{
    setCount(count+1);
    //need call back fuction sinc both set count run at same time
    setCount((prev)=>prev+1);
  }

  useEffect(()=>{
    //log every time once the count is changed/updated
    console.log(`The count is ${count}`);
  },[count])
  return (
    <div>
      <span onClick={increase}>{count}</span>
    </div>
  )
}

export default UseEffect