import React from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div className="container2">
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div className="productDescription">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Stock disponible:{product.stock}</p>
        <p>Categoria:{product.category}</p>
      </div>
      <div>
        <ItemCount initial={1} stock={product.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
