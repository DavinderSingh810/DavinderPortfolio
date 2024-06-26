import React from 'react';
import { HashLink } from 'react-router-hash-link'
import "../Styles/Nav.css";

function Navbar() {
  return (
    <div className='navd'>
      
        <nav className='navbar'>
            <div>pfpandname</div>
            <div className='list'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><HashLink smooth to="/#section1" > About </HashLink></li>
            <li><a href="#">Projects</a></li>
          </ul>
          </div>
        </nav>
      
    </div>
  );
}

export default Navbar;
