// HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categories from './Categories';
import SlickCarousel from './SlickCarousel';
import FeaturedProducts from './FeaturedProducts';
import PromotionalBanners from './PromotionalBanners';
import ProductGrid from './ProductGrid';
import SocialProof from './SocialProof';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      const images = response.data.map(product => product.image);
      setImages(images);
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.home}>
      <h1>Welcome to our store</h1>
      <p className={styles.paragraph}>Feel free to browse our products.</p>
      <Categories />
<SlickCarousel images={images} />
      
<FeaturedProducts className={styles.component} />
<PromotionalBanners className={styles.component} />
<ProductGrid className={styles.component} />
<SocialProof className={styles.component} />
<NewsletterSignup className={styles.component} />
<Footer className={styles.component} />
    </div>
  );
};

export default HomePage;