import React, { useEffect, useState } from "react";

const ReactNode = () => {
  const [mode, setMode] = useState("react");
  const [content, setContent] = useState(<p>This is React stuff</p>);

  useEffect(() => {
    if (mode === "react") {
      setContent(<p>This is React stuff</p>);
    } else if (mode === "node") {
      setContent(<p>This is Node stuff</p>);
    }
  }, [mode]);

  const changeMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <p className="text-2xl font-bold">
      <span 
  onClick={() => changeMode("react")} 
  className="cursor-pointer mr-2 text-blue-500 hover:underline"
>
  React
</span> 
| 
<span 
  onClick={() => changeMode("node")} 
  className="cursor-pointer ml-2 text-green-500 hover:underline"
>
  Node
</span>

      </p>
      <div className="h-120 p-10 text-xl w-100 rounded-md bg-white">
        {content}
      </div>
    </div>
  );
};

export default ReactNode;
