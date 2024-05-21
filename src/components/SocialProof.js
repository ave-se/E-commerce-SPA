// SocialProof.js
import React, { useState, useEffect } from 'react';

const API_URL = '/api/testimonials'; // Replace with your API URL

const SocialProof = () => {
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ text: '', author: '' });

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(setTestimonials);
  }, []);

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
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(response => response.json())
      .then(newTestimonial => {
        setTestimonials([...testimonials, newTestimonial]);
        setForm({ text: '', author: '' });
      });
  };

  return (
    <section>
      <h2>Testimonials</h2>
      {testimonials[current] && (
        <>
          <p>"{testimonials[current].text}"</p>
          <p>- {testimonials[current].author}</p>
        </>
      )}
      <button onClick={prevTestimonial}>Previous</button>
      <button onClick={nextTestimonial}>Next</button>

      <h2>Add your own testimonial</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="author" value={form.author} onChange={handleChange} required />
        </label>
        <label>
          Testimonial:
          <textarea name="text" value={form.text} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default SocialProof;