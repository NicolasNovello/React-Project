import React from "react";
import Item from "../ProductItem/ProductItem";
import "./ItemList.css";
const ItemList = ({ product }) => {
  return (
    <div className="container">
      {product.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ItemList;
