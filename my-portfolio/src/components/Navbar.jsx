import React from 'react';
import "../Styles/Nav.css";

function Navbar() {
  return (
    <div className='navd'>
      
        <nav className='navbar'>
            <div>pfpandname</div>
            <div className='list'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
          </div>
        </nav>
      
    </div>
  );
}

export default Navbar;
