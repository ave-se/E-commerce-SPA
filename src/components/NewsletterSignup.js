// Newsletter.js
import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your server
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <section className={styles.newsletterContainer}>
      <h2>Subscribe to our newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input className={styles.input} type="email" value={email} onChange={handleChange} required />
        </label>
        <button className={styles.submitButton} type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;