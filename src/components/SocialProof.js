// SocialProof.js
import React, { useState } from 'react';

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
    <section>
      <h2>Testimonials</h2>
      <p>"{testimonials[current].text}"</p>
      <p>- {testimonials[current].author}</p>
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