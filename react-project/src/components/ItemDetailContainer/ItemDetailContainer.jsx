import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json();
        const newPrd = data.find((p) => p.id == id);
        setProduct(newPrd);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="fondo">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
