import { useState } from 'react'

function App() {
  const[color,setColor] = useState("black");

  return (
    <>
      <div className='w-full h-screen duration-200 relative' 
      style={{backgroundColor: color}}>
        <div className='flex flex-col flex-wrap items-center gap-4'>
          <div className='bg-white rounded-lg p-3 mt-5'>Made by Keshav Bhardwaj</div>
          <div className='bg-white rounded-lg p-3'>This project is very simple project. So what i have learned in this project? </div>
          <div className='bg-white rounded-lg p-3'>I have learned that how to implement TailwindCss with Reactjs. I have also learned that how to use useState for updating the UI.</div>
        </div>
        <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-10'>
          <div className='flex flex-wrap justify-center bg-white rounded-lg '>
              <button className='bg-red-500 m-3 rounded-lg p-2 text-white' onClick={()=> { setColor("red") }}>red</button>
              <button className='bg-yellow-500 m-3 rounded-lg p-2 text-white' onClick={()=> { setColor("yellow") }}>yellow</button>
              <button className='bg-green-500 m-3 rounded-lg p-2 text-white' onClick={()=> { setColor("green") }}>green</button>
              <button className='bg-black m-3 rounded-lg p-2 text-white' onClick={()=> { setColor("black") }}>black</button>
              <button className='bg-blue-500 m-3 rounded-lg p-2 text-white' onClick={()=> { setColor("blue") }}>blue</button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
