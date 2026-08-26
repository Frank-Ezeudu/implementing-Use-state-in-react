import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('Frank')
  const [inputName, setInputName] = useState('Frank')

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl mx-auto text-center mt-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Input your Username</h1>
      <input
        className="w-full border-2 border-green-400 rounded-xl px-5 py-4 text-lg outline-none focus:border-green-600 transition"
        type='text'
        placeholder='Input username'
        
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setName(inputName)
          }
        }}
      />
      <p className="inline-block mt-6 bg-green-100 text-green-700 px-6 py-3 rounded-xl font-semibold">Hello {name}</p>
    </div>


  )
}

export default Form