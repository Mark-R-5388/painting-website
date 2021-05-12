import React from 'react';
import Link from 'gatsby-link';
import './header.css';

const Header = ({ siteTitle }) => (
  <div className='Header'>
    <div className='HeaderGroup'>
      <Link to='/'>
        <img width='30' src={require('../images/logo-image.jpeg')} />
      </Link>
      <Link to='/about'>About Me</Link>
      <Link to='/contact'>Contact Me</Link>

      <Link to='/shop'>
        <button>Shop</button>
      </Link>
    </div>
  </div>
);

export default Header;
