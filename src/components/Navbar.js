import React from 'react'
import './Navbar.css'
import logo from '../attributes/Logo.svg'
import Button from '../attributes/Button.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [click,setClick]=useState(false);
  function handleClick()
  {
      if(click===false)
      setClick(true);
      else
      setClick(false);
  }
  return (
    <div className="heading">
    {/* <a href="/"><h1 className='WoW'>WoW</h1></a> */}
    <NavLink to='/'><img className='logo' src={logo} alt='WoW Logo'/> </NavLink>
    <div>
      <ul onClick={handleClick} className={click?"nav-items active":"nav-items"}>
        <li><a href="/">Home</a></li>
        <li><a href="/Regions">Regions</a></li>
        <li><a href="/Events">Events</a></li>
        <li><a href="/Sponsors">Sponsors</a></li>
        <li><a href="/ContactUs">ContactUs</a></li>
        <li><a href="/About">About</a></li>
      </ul>
      </div>
      <div>
        <NavLink to='/Events'><img className='btn' src={Button} alt="button.png"/></NavLink>
      </div>
    </div>
    )
}
