
import React from "react";

const CoffeeCard = ({ image, name, description, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>

        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        <span className="font-bold text-brown-900">{price}</span>
      </div>
    </div>
  );
};

export default CoffeeCard;
