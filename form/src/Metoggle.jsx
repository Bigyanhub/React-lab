import React, { useEffect, useState } from 'react'

const Metoggle = () => {
  const [isDark, setIsDark] = useState(false);

  const handleMode =(boolean)=>{
    setIsDark((boolean)=>!boolean)
  }

  useEffect(()=>{
    document.body.style.backgroundColor = isDark? "black" : "white"
  })
  
  return (
    <div>
      <button className='px-5 py-3 text-white '
      style={{backgroundColor: isDark ? 'grey': 'green'}}
      onClick={handleMode}
      >{isDark ? "Light Mode☀" : "Dark Mode🌑"}</button>
    </div>
  )
}

export default Metoggle