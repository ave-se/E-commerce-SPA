import React from 'react';
import styles from './Cart.module.css';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <h1>Your Cart</h1>
      <p>Your cart is currently empty.</p>
    </div>
  );
};

export default Cart;