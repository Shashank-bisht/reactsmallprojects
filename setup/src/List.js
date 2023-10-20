import React from 'react';

const List = ({people}) => {
  return (
    <>
    {/* person represent an individual element from the people */}
     {people.map((person) =>{
      const {id, name, age, image} = person;

      return <article key={id} className='person'>
        <div></div>
        <img src={image} alt="" />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
        <div></div>
      </article>
     })}
    </>
  );
};

export default List;
