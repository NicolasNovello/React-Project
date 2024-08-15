import React from "react";
import "./ProductItem.css";

const ProductItem = ({ item }) => {
  return (
    <div key={item.id} className="card">
      <h2>{item.name}</h2>
      <img src={item.img} alt={item.name} />
      <p>{item.description}</p>
    </div>
  );
};

export default ProductItem;
