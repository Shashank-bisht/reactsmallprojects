import React from 'react';
import Tour from './Tour';
// receive props from App
const Tours = ({tours, removeTour}) => {
  return  <section>
    <div className='title'>
      <h2>ours tours</h2>
      <div className='underline'></div>
    </div>
    <div>
      {tours.map((tour)=>{
        // Using the spread operator to pass all properties of the tour object as individual props to the Tour component.
        return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
      })}
    </div>
  </section>
};

export default Tours;
