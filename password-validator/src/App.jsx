import React from 'react'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
      <div className=' bg-gray-800 p-6 rounded-lg shadow-lg w-98 text-center'>
        <h2 className='text-2xl font-bold mb-4 text-blue-400'>Password strength Cherecker</h2>
        <div>
          <input type="text"
          placeholder='Enter your Password' />
          {/*  */}
        </div>

      </div>

    </div>
  )
}

export default App