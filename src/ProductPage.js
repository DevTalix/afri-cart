// src/components/ProductPage.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  // Get the productId from the URL params
  const { productId } = useParams();
  
  const [product, setProduct] = useState(null);

  // Fetch the product data when the component mounts or the productId changes
  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [productId]);

  // If product data is not yet loaded, show a loading state
  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      
      {/* Example button for adding to cart */}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
