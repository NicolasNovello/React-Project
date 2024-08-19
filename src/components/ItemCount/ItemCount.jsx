import { useState } from "react";

export const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const addToCar = () => {
    alert(`se agregaron ${count} productos al carrito`);
  };

  return (
    <div>
      <h2>Selecciona la cantidad deseada</h2>
      <p>{count}</p>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={increment}>Incrementar</button>
      <button onClick={addToCar}>Añadir al carrito</button>
    </div>
  );
};
