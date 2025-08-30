import React from "react";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4 mb-6">
        🛒 E-Commerce Product Listing
      </h1>
      <ProductList />
    </div>
  );
};

export default App;
