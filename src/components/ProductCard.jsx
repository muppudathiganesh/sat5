import React from "react";

const ProductCard = ({ title, price, isAvailable, discount, image }) => {
  return (
    <div className="border rounded-xl shadow-lg p-4 w-64 text-center">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-600">₹{price}</p>

      {discount && <p className="text-green-600">Discount: {discount}%</p>}
      {!isAvailable && <p className="text-red-500">Out of Stock</p>}
    </div>
  );
};

export default ProductCard;
