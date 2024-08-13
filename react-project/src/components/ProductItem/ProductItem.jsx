import React from "react";

const ProductItem = ({ item }) => {
  return (
    <div key={item.id}>
      <img src={item.img} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.stock}</p>
    </div>
  );
};

export default ProductItem;
