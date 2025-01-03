import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>Feso <span className='admin'>Admin</span></div>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
