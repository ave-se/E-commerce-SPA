// ProductGrid.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import styles from './ProductGrid.module.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // hide the alert after 3 seconds
  };

  return (
    <section className={styles.grid}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.products}>
        {products.map(product => (
          <div key={product.id} className={styles.product}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.title} className={styles.image} />
            </div>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.price}>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {showAlert && (
        <div className={styles.alert}>
          <p>Item added to cart!</p>
          <Link to="/cart">Go to Cart</Link>
          <button onClick={() => setShowAlert(false)}>Continue Shopping</button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;