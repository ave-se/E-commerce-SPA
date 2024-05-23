// ProductList.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { SearchContext } from './SearchContext'; // import the SearchContext
import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { searchQuery } = useContext(SearchContext); // get the searchQuery from the context

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  // filter the products based on the searchQuery
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id} className={styles.product}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;