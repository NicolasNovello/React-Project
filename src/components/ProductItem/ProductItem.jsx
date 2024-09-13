import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  return (
    <Link className="titulos" to={`/item/${item.id}`}>
      <div key={item.id} className="card">
        <h2>{item.name}</h2>
        <img src={item.img} alt={item.name} />
        <p>{item.description}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
