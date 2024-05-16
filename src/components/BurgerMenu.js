// BurgerMenu.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <FaBars onClick={toggleMenu} />
      {isOpen && (
        <div className={styles.menu}>
          <a href="#">Menu Item 1</a>
          <a href="#">Menu Item 2</a>
          <a href="#">Menu Item 3</a>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;