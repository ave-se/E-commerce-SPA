import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to our store</h1>
      <p>Feel free to browse our products.</p>
    </div>
  );
};

export default HomePage;