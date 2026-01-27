import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = ()=>{
    setCount(count+1);
  }

  const decrement = ()=>{
    setCount(count-1);
  }

  const reset = ()=>{
    setCount(0);
  }


  return (
    <div className='bg-gray-900 min-h-screen flex justify-center items-center'>
      <div className='bg-gray-700  p-30 rounded-lg flex flex-col items-center gap-10 '>
      <div>
          <h3 className='text-white font-bold text-2xl'>C O U N T : {count} </h3>
      </div>

      <div  className='text-white'>
        <button onClick={increment} className='bg-green-500 px-10 p-3 border-1  rounded-md hover:bg-green-400 hover:text-black active:scale-98 transition duration-75 ease-in-out'>Increment</button>
        <button onClick={decrement} className='ml-10 px-10 bg-red-500 p-3 border-1 rounded-md hover:bg-red-400 hover:text-black active:scale-98 transition duration-75 ease-in-out'>Decrement</button>
        <button onClick={reset} className='ml-10 px-10  bg-blue-500 p-3 border-1  rounded-md hover:bg-blue-400 hover:text-black active:scale-98 transition duration-75 ease-in-out'>Reset</button>
      </div>
      </div>
    </div>
  )
}

export default App