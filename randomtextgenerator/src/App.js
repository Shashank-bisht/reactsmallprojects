import React, { useState } from 'react';
import data from './data';
function App() {
  // state for no. of paragraphs to be displayed
  const [count, setCount] = useState(0);
  // state for setting text
  const [text, setText] = useState([]);

  // for slicing paragraphs
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
    // make the input to zero after submitting the form
    setCount(0)
  }
  // parseint to convert string to number
  // handleChange is defined to prevent counter from getting negative value
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0 && newValue <=8) {
      setCount(newValue);
    }
  }
  //if all three conditions are met (i.e., newValue is a valid number, non-negative, and not greater than 8), then the entire if statement evaluates to true.

// When the if statement evaluates to true, the code inside the if block is executed, which means setCount(newValue) is called, updating the state variable count with the value of newValue.

// If any of the conditions is not met (i.e., if newValue is not a valid number, is negative, or is greater than 8), the if statement evaluates to false, and the code inside the if block is not executed. This prevents the state variable count from being updated with an invalid value.
  return (
  <section className='section-center'><h3>tired of dkfldfdk</h3>
  <form className='lorem-form' onSubmit={handleSubmit}>
    <label htmlFor="amount">
      paragraphs:
    </label>
    <input type="number" name='amount' id='amount' value={count} onChange={handleChange} />
    <button type='submit' className='btn'>generate</button>
  </form>
  <article className='lorem-text'>
    {/* iterating over the text to get paragraphs */}
    {text.map((item, index)=>{
      return <p key={index}>{item}</p>
    })}
  </article>
  </section>
    )
}

export default App;
