import { useState } from "react";

export const ItemCount = () => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const addToCar = () => {
    alert(`se agregaron ${count} productos al carrito`);
  };

  return (
    <div>
      <h1>Contador</h1>
      <p>{count}</p>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={increment}>Incrementar</button>
      <button onClick={addToCar}>Añadir al carrito</button>
    </div>
  );
};
