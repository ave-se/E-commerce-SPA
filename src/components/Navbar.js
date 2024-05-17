// NavBar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import BurgerMenu from './BurgerMenu';
import styles from './NavBar.module.css';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.navbar}>
      {windowWidth <= 600 && <BurgerMenu />}
      {windowWidth > 600 && (
        <>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </>
      )}
      <div className={styles.searchContainer}>
        <input type="text" className={styles.searchBar} placeholder="Search products..." />
        <button className={styles.searchButton}>
          <FaSearch size={11} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;