// ProductGrid.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ProductGrid.module.css'; // Import your CSS module

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.grid}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.products}>
        {products.map(product => (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;