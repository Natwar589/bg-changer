import { useState } from 'react'


import './App.css'

function App() {
const [color ,setColor] = useState("Orange")
  return (
    <div
    className='h-screen m-0 p-0 w-full duration-200 '
    style={{backgroundColor:color}}>
    <div
    className='flex  flex-wrap fixed justify-center bottom-12 inset-x-0 px-2'>
    <div
    className='flex flex-wrap bg-white justify-center shadow-lg gap-3 rounded-3xl py-2 px-2'>

<button onClick={()=>setColor("red")}
      className='outline-none px-5 py-3 rounded-full text-white shadow-sm'
      style={{backgroundColor:"red"}}>Red</button>

<button onClick={()=>setColor("green")}
      className='outline-none px-5 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor:"green"}}>Green</button>

<button onClick={()=>setColor("blue")}
      className='outline-none px-5 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor:"blue"}}>Blue</button>

<button onClick={()=>setColor("cyan")}
      className='outline-none px-5 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor:"cyan"}}>Cyan</button>

<button onClick={()=>setColor("pink")}
      className='outline-none px-5 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor:"pink"}}>Pink</button>

<button onClick={()=>setColor("black")}
      className='outline-none px-5 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor:"black"}}>black</button>

<button onClick={()=>setColor("grey")}
      className='outline-none px-5 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor:"grey"}}>Grey</button>

<button onClick={()=>setColor("purple")}
      className='outline-none px-5 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor:"purple"}}>Purple</button>

<button onClick={()=>setColor("yellow")}
      className='outline-none px-5 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor:"yellow"}}>Yellow</button>

<button onClick={()=>setColor("olive")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor:"olive"}}>Olive</button>

      </div>
    </div>
    </div>
  )
}

export default App
