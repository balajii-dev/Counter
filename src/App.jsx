import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className='bg-gray-900 min-h-screen flex justify-center items-center p-4'>
      {/* Changed p-30 to responsive padding: p-8 for mobile, md:p-20 for larger screens */}
      <div className='bg-gray-700 p-8 md:p-20 rounded-lg flex flex-col items-center gap-10 w-full max-w-2xl shadow-2xl'>
        
        <div>
          <h3 className='text-white font-bold text-2xl md:text-4xl tracking-widest text-center'>
            C O U N T : {count}
          </h3>
        </div>

        {/* Changed div to 'flex-wrap' and 'justify-center'. 
          Replaced 'ml-10' with 'gap-4' so buttons stack vertically on small screens automatically.
        */}
        <div className='flex flex-wrap justify-center gap-4 text-white w-full'>
          <button 
            onClick={increment} 
            className='flex-1 min-w-[140px] bg-green-500 px-6 py-3 border rounded-md hover:bg-green-400 hover:text-black active:scale-95 transition duration-75 ease-in-out font-bold'
          >
            Increment
          </button>
          
          <button 
            onClick={decrement} 
            className='flex-1 min-w-[140px] bg-red-500 px-6 py-3 border rounded-md hover:bg-red-400 hover:text-black active:scale-95 transition duration-75 ease-in-out font-bold'
          >
            Decrement
          </button>
          
          <button 
            onClick={reset} 
            className='flex-1 min-w-[140px] bg-blue-500 px-6 py-3 border rounded-md hover:bg-blue-400 hover:text-black active:scale-95 transition duration-75 ease-in-out font-bold'
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
