import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


export default function Header() {


  return (
    <header>
      <Link className="header-link1" to='/login'>Login</Link>
      <Link className="header-link2" to='/userprofile'>My Profile</Link>
      <Link className="header-link3" to='/'>Home</Link>
      <h2 className="header-title">Plan Your Diet</h2>    
    </header>
  )
}
