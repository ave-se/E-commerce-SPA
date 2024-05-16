import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './SlickCarousel.module.css'; // Import your styles

const SlickCarousel = ({ images }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Change to your desired speed
  };
  
  return (
    <Slider {...settings} className={styles.slider}>
      {images.map((image, index) => (
        <div key={index} className={styles.slide}>
          <img src={image} alt={`Slide ${index + 1}`} className={styles.image} />
        </div>
      ))}
    </Slider>
  );
}

export default SlickCarousel;