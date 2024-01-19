import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [isnavbaropen, setisnavbaropen] = useState(false)
  const togglenavbar = () => {
    setisnavbaropen(!isnavbaropen)
  }
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="" />
        <button onClick={togglenavbar} className='nav-toggle'>
          <FaBars/>
        </button>
      </div>
       
          {isnavbaropen &&(
             <div className="links-container show-container">
            <ul className='links'>
            {links.map((link)=>{
             const {id, url, text} = link;
             return <li key={id} >
              <a href={url}>{text}</a>
             </li>
            })}
          </ul>
          </div>
          )}
          
        
      <ul className='social-icons'>
        <li>
          <a href="https://www.twiter.com">
            <FaTwitter/>
          </a>
        </li>
        <li>
          <a href="https://www.twiter.com">
            <FaTwitter/>
          </a>
        </li>
        <li>
          <a href="https://www.twiter.com">
            <FaTwitter/>
          </a>
        </li>
      </ul>
    </div>
  </nav>
}

export default Navbar
