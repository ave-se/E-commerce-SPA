// SavedItems.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import styles from './SavedItems.module.css';

const SavedItems = () => {
  const { savedItems, removeFromSaved, addToCartFromSaved } = useContext(CartContext);

  return (
    <div className={styles.savedItems}>
      <h1>Saved Items</h1>
      {savedItems.length === 0 ? (
        <p>You have no saved items.</p>
      ) : (
        savedItems.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.title} className={styles.savedItemImage} />
            <p>{item.title}: ${item.price.toFixed(2)}</p>
            <button onClick={() => removeFromSaved(item.id)}>Remove</button>
            <button onClick={() => addToCartFromSaved(item.id)}>Add to Cart</button> {/* Add to Cart button */}
          </div>
        ))
      )}
    </div>
  );
};

export default SavedItems;