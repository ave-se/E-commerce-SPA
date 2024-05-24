// SocialProof.js
import React, { useState } from 'react';
import styles from './SocialProof.module.css';

const testimonials = [
  { text: 'This is the best website for shopping ever!', author: 'John Doe' },
  { text: 'I love how fast delivery was', author: 'Jane Doe' },
  { text: 'Highly recommended, especially for discounts and sales!', author: 'Jim Doe' },
  // Add more testimonials as needed
];

const SocialProof = () => {
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState({ text: '', author: '' });

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    testimonials.push(form);
    setForm({ text: '', author: '' });
  };

  return (
    <section className={styles.socialProofContainer}>
      <h2>Testimonials</h2>
      <p className={styles.testimonial}>"{testimonials[current].text}"</p>
      <p className={styles.author}>- {testimonials[current].author}</p>
      <button className={styles.button} onClick={prevTestimonial}>Previous</button>
      <button className={styles.button} onClick={nextTestimonial}>Next</button>

      <h2>Add your own testimonial</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name:
          <input className={styles.input} type="text" name="author" value={form.author} onChange={handleChange} required />
        </label>
        <label>
          Testimonial:
          <textarea className={styles.input} name="text" value={form.text} onChange={handleChange} required />
        </label>
        <button className={styles.submitButton} type="submit">Submit</button>
      </form>
    </section>
  );
};

export default SocialProof;