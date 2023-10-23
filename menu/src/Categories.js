import React from 'react';
// categories is coming from app.js and have unique category
const Categories = ({categories,filterItems}) => {
  return (<div className='btn-container'>
  {categories.map((category,index) =>{
    // using map button element is created for each category
    return( <button type='button' className='filter-btn' key={index} onClick={()=> 
    filterItems(category)}>
      {/* filterItems is a function which is defined in app.js */}
      {category}
    </button>)
  })}
  </div>
  )
};

export default Categories;
