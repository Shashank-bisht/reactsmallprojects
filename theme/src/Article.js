import React from 'react'
import moment from 'moment'
const Article = ({item}) => {
  // use {item} because prop is an object like this {item: {…}} after writing {item} it will look like seee console
  console.log(item)
  return (
    <article className='post'>
      <h2>{item.title}</h2>
      <div className='post-info'>
        <span>{moment(item.date).format('dddd Do, YYYY')}</span>
        <span>{item.length} min read</span>
      </div>
      <p>{item.snippet}</p>
    </article>
  )
}

export default Article
