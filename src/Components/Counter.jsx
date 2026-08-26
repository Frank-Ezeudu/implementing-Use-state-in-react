import React from 'react'
import { useState } from 'react'


const Counter = () => {
  const [count, setcount] = useState(0)

  return (
    <>
    <div className=" gap-4 bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl mx-auto text-center">
      <h1 className="text-xl font-semibold text-gray-700">Current Count:</h1>
       <p className="text-6xl font-bold text-green-600 my-6">{count}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button onClick={() => setcount(count + 1)} className="bg-green-50 text-green-600 py-4 rounded-xl font-semibold text-lg">
        Increment</button>
      <button onClick={() => setcount(count - 1)} className="bg-green-50 text-green-600 py-4 rounded-xl font-semibold text-lg">
        Decrement</button>
      <button onClick={() => setcount(0)} className="bg-green-50 text-green-600 py-4 rounded-xl font-semibold text-lg">
        Reset</button>
      </div>
    </div>
    </>
  )
}

export default Counter