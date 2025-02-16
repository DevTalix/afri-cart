import React from "react";
import ProductList from "../components/ProductList";

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to AfriCart</h1>
        <p className="text-lg">Your Ugandan Marketplace for the Best Deals</p>
      </section>

      {/* Product List Section */}
      <section className="py-12 bg-gray-50">
        <ProductList />
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 AfriCart. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
