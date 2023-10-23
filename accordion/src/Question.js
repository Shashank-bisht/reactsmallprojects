import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// getting title , info from app.js
const Question = ({title,info}) => {
  const [showInfo, setShowInfo] = useState(false);
  // in starting showInfo is false
  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={()=>{
        setShowInfo(!showInfo)
      }}>{showInfo? <AiOutlineMinus/>:<AiOutlinePlus/>}  </button>
    
    </header>
    { showInfo && <p>{info}</p>}
    {/* If the expression on the left of && is true, it evaluates and returns the value on the right.
If the expression on the left of && is false, it returns the value on the left. */}
  </article>;
};

export default Question;
