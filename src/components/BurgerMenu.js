// BurgerMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Burger menu clicked');
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <FaBars onClick={toggleMenu} />
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default BurgerMenu;