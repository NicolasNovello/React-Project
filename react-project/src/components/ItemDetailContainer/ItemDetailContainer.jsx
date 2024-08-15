import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json();
        const newPrd = data.find((p) => p.id === 1);
        setProduct(newPrd);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fondo">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
