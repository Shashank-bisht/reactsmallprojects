import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  // destructuring properties from data
  const {name, job, image, text} = people[index]
  // as index changes review also changes

  const checkNumber = (number)=>{
    if(number > people.length -1){
      return 0;
    }
    if(number<0){
      return people.length -1;
    }
    return number;
  }

  const nextPerson =()=>{
    setIndex(checkNumber(index+1))
  }
  const prevPerson =()=>{
    setIndex(checkNumber(index-1))
  }
// for getting random person
  const randomPerson=()=>{
let randomNumber = Math.floor(Math.random()*people.length)
if(randomNumber === index){
  randomNumber = index + 1
}
setIndex(checkNumber(randomNumber))
  }
  
  return <article className='review'>
    <div className='img-container'><img src={image} alt="" className='person-img' />
    <span className='quote-icon'>
      <FaQuoteRight/>
    </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight/>
      </button>
      
    </div>
    <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
  </article>;
};

export default Review;
