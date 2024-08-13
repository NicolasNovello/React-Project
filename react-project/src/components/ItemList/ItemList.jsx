import React from "react";
import Item from "../ProductItem/ProductItem";

const ItemList = ({ product }) => {
  return (
    <div>
      {product.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ItemList;
