import React from "react";
import useFetch from "../hooks/useFetch";
import "./Products.css";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2 className="status">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="status error">Error: {error}</h2>;
  }

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="products">
        {data &&
          data.slice(0, 10).map((product) => (
            <div key={product.id} className="card">
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>₹ {product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
