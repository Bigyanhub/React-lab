import React from 'react'
import Joke from './Joke'

const App = () => {
  return (
    <div className="bg-green-800 min-h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold m-4">
        Joke generator using React and Joke API
      </h1>
      <Joke />
    </div>
  )
}

export default App
