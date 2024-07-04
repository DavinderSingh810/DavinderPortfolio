import React, { useState, useEffect } from 'react';
import "../Styles/hi.css";

const text = 'Hey, I am Davinder';
const speed = 50;

function Hic() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => {
      if (displayedText.length < text.length) {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      } else {
        clearTimeout(timer); // Optional: stop the animation
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText]);

  return (
    <div className='hicontainer'>
      <div className='hi'>
        <h1 className='hey'>{displayedText}</h1>
        <p className='tag'>Mastering code to solve today's challenges with tomorrow's solutions.</p>
      </div>
      <div className="button-container">
        <button type="button" className="btn btn-info">MY Resume</button>
      </div>
    </div>
  );
}

export default Hic;
