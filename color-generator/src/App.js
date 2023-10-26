import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
 const handleSubmit = (e)=>{
  e.preventDefault();

  try{
    // the line of code creates an instance of the Values class with a starting color, and then it generates an array of 10 different color shades based on that initial color
    let colors = new Values(color).all(10)
    setList(colors)
  }catch(error){
    setError(true)
    console.error(error)
  }
 
 }

  return (
    <>
  <section className='container'>
<h3>color generator</h3>
<form onSubmit={handleSubmit}>
  {/* The primary purpose of the onChange event handler is to capture and respond to user input in real-time. */}
<input type="text" value={color} onChange={(e)=> setColor(e.target.value)} className={`${error?'error':null}`} />
<button className='btn' type='submit'>submit</button>
</form>
  </section>
  <section className='colors'>
{list.map((color,index)=>{
  return <SingleColor key={index} {...color} index={index} />
})}
  </section>
  </>
  )
}

export default App
