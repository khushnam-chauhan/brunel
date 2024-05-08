import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <Link to="/">Brunel</Link>
      </div>
      <div className='nav-links'>
        <Link to="/register" className='nav-button projects'>Get Projects</Link>
        <Link to="#" className='nav-button talent'>Onboard Talent</Link>
      </div>
    </div>
  )
}

export default Navbar
