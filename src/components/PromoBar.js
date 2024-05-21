// PromoBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router

const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <Link to="/discounted-products" style={{ textDecoration: 'none', color: 'white' }}>
      <div style={{ 
        backgroundColor: 'blue', 
        padding: '10px', 
        width: '100%', 
        zIndex: 100, 
        display: 'flex', 
        justifyContent: 'center', 
        position: 'relative' ,
        boxSizing: 'border-box' 
      }}>
        <span>Check out our latest deals, Don't miss a 15% discount on selected products</span>
        <button 
          onClick={(e) => { e.preventDefault(); setIsVisible(false); }} 
          style={{ 
            position: 'absolute', 
            right: '30px', 
            border: 'none', 
            background: 'none', 
            cursor: 'pointer' 
          }}
        >
          X
        </button>
      </div>
    </Link>
  );
};

export default PromoBar;