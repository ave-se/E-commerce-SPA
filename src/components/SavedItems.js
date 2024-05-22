// SavedItems.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import styles from './SavedItems.module.css'; // create a new CSS module for this component

const SavedItems = () => {
    const { savedItems } = useContext(CartContext);

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
                    </div>
                ))
            )}
        </div>
    );
};

export default SavedItems;