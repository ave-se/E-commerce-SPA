// DiscountedProducts.js
import React, { useState, useEffect } from 'react';

const DiscountedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Fetch all products
      .then(response => response.json())
      .then(data => {
        const discountedProducts = data.reduce((acc, product, index) => {
          // Slash the prices of every 3rd product by 15% and add them to the discounted products
          if (index % 3 === 0) {
            acc.push({ ...product, originalPrice: product.price, price: product.price * 0.85 });
          }
          return acc;
        }, []);
        setProducts(discountedProducts);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Discounted Products</h1>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} style={{ width: '200px' }} />
          <h2>{product.title}</h2>
          <p><s>${product.originalPrice.toFixed(2)}</s> ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default DiscountedProducts;