import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json();
        const filteredProducts = categoryId
          ? data.filter((p) => p.category === categoryId)
          : data;
        setProducts(filteredProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div className="greeting">
      <h1>{greeting}</h1>

      <ItemList product={products} />
    </div>
  );
};

export default ItemListContainer;
