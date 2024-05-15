import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return null;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetails;