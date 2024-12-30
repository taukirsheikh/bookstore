import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <>
   <header>
    <div>
        {/* logo */}
        <Link to='/'>
        <img src={logo} alt="logo" />
        </Link>
    </div>
   </header>
   </>
  )
}

export default Header