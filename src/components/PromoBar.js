// PromoBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router

const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <Link to="/sales" style={{ textDecoration: 'none', color: 'white' }}>
      <div style={{ backgroundColor: 'blue', padding: '10px', width: '100%', zIndex: 100 }}>
        <span>Check out our latest deals!</span>
        <button 
          onClick={(e) => { e.preventDefault(); setIsVisible(false); }} 
          style={{ float: 'right', border: 'none', background: 'none', cursor: 'pointer' }}
        >
          X
        </button>
      </div>
    </Link>
  );
};

export default PromoBar;