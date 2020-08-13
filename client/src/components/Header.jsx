import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


export default function Header() {


  return (
    <header>
      <h2>The Diet App</h2>
      <Link to='/login'>Login</Link>
      <Link to='/userprofile'>My Profile</Link>
    </header>
  )
}
