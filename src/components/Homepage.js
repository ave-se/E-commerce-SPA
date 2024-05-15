// HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SlickCarousel from './SlickCarousel';
import Header from './Header';
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
      <Header />
      <h1>Welcome to our store</h1>
      <p>Feel free to browse our products.</p>
      <SlickCarousel images={images} />
      <FeaturedProducts />
      <PromotionalBanners />
      <ProductGrid />
      <SocialProof />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default HomePage;