import React from 'react';
import Logo from './logo.png';
import './nav.css';

const Navbar = () => {
  return (
    <nav>
      <div className='logo navbar'>
        <img src={Logo} alt="Logo" className="logo-img" />
        <a href="#Home">BuildBazaar</a>
      </div>
      <div className='menu navbar'>
        <a href="#Cart">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;
