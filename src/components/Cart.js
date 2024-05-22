// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, saveForLater } = useContext(CartContext);

  return (
    <div className={styles.cart}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        cart.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.title} className={styles.cartImage} />
            <p>{product.title}: ${product.price.toFixed(2)} x {product.quantity}</p>
            <button onClick={() => increaseQuantity(product.id)}>Increase Quantity</button>
            <button onClick={() => decreaseQuantity(product.id)}>Decrease Quantity</button>
            <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            <button onClick={() => saveForLater(product.id)}>Save for Later</button> {/* Save for Later button */}
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;