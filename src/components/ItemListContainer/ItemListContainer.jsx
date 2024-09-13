import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const myProducts = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(myProducts).then((res) => {
      const newProduct = res.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setProducts(newProduct);
    });
  }, [categoryId]);

  return (
    <div className="greeting">
      <h1>{greeting}</h1>

      <ItemList product={products} />
    </div>
  );
};

export default ItemListContainer;
