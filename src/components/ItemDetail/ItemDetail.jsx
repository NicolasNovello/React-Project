import React from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [showItemCount, setShowItemCount] = useState(true);
  const onAdd = (quantity) => {
    addItem(product, quantity);
    setShowItemCount(false);
  };
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
        {showItemCount ? (
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart">Terminar compra</Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
