// Cart.js
import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import styles from './Cart.module.css';
import SavedItems from './SavedItems'; // import the SavedItems component

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, saveForLater } = useContext(CartContext);
  const [showSaved, setShowSaved] = useState(false); // new state for showing saved items

  const toggleShowSaved = () => {
    setShowSaved((prevShowSaved) => !prevShowSaved);
  };

  return (
    <div className={styles.cart}>
      <h1>Your Cart</h1>
      <button onClick={toggleShowSaved}>{showSaved ? 'Hide Saved Items' : 'Show Saved Items'}</button>
      {showSaved && <SavedItems />}
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