import React from 'react';
import "../Styles/Nav.css";
import imageSrc from "../img/Image.png"; // Import the image

function Navbar() {
  return (
    <div className='navd'>
      <nav className='navbar'>
        <div className='pfp'>
          
          <img src={imageSrc} alt="" />
           <h3>Davinderpal Singh</h3>
        </div>
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
