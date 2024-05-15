import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Navbar;