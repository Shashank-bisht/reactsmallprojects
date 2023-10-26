import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data)
  // index (when user clicks on the button)
  const [index, setIndex] = useState(0)
  return <section className='section'>
    <div className="title">
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className="section-center">
      {people.map((person, personIndex) =>{
        // destructuring properties from person
        const {id, image,name, title, quote} = person
        let position = 'nextSlide'
        if(personIndex === index){
          position = 'activeSlide'
        }
        if(personIndex === index-1){
          position = 'lastSlide'
        }
        return <article className={position} key={id}>
          <img src={image} className='person-img' alt="" />
          <h4>{name}</h4>
          <p className='title'>{title}</p>
          <p className='text'>{quote}</p>
          <FaQuoteRight className='icon'/>
        </article>
      })}
      <button className='prev'>
        <FiChevronLeft/>
      </button>
      <button className='next'>
        <FiChevronRight/>
      </button>
    </div>
  </section>;
}

export default App;
