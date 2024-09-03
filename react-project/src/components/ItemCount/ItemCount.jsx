import { useState } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <h2>Selecciona la cantidad deseada</h2>
      <p>{count}</p>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={increment}>Incrementar</button>
      <button onClick={() => onAdd(count)}>Añadir al carrito</button>
    </div>
  );
};
