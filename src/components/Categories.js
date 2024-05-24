// Categories.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category, index) => (
        <Link key={index} to={`/products/${category}`} className={styles.categoryCard}>
          {category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;