import React from "react";
import ProductCard from "./ProductCard";
import bagImage from "../assets/bag.jpeg";  // ✅ correct way

const ProductList = () => {
  const products = [
    {
      title: "Wireless Headphones",
      price: 2999,
      isAvailable: true,
      discount: 10,
      image: bagImage,  // use variable
    },
    {
      title: "Smart Watch",
      price: 4999,
      isAvailable: false,
      image: bagImage,
    },
    {
      title: "Gaming Mouse",
      price: 1599,
      isAvailable: true,
      discount: 5,
      image: bagImage,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
