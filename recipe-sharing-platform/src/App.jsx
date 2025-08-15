import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Recipe Sharing Platform
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to your new recipe sharing application!
        </p>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Count is {count}
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Tailwind CSS is working! 🎉
        </p>
      </div>
    </div>
  )
}

export default App