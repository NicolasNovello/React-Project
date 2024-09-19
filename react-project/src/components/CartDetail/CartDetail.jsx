import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartProvider";
import { Link } from "react-router-dom";

const CartDetail = ({ cart }) => {
  const { priceCart, totalProducts, removeCart, clearCart } =
    useContext(CartContext);

  return (
    <div>
      <h2>Carrito de compras</h2>
      <hr />
      {cart.map((item) => (
        <div key={item.product.id}>
          <img src={item.product.img} alt={item.product.name} />
          <p>{item.product.name}</p>
          <p>Cantidad:{item.quantity}</p>
          <p>Precio: ${item.product.price}</p>

          <button onClick={() => removeCart(item.product.id)}>Eliminar</button>
          <hr />
        </div>
      ))}
      <h3>Total productos: {totalProducts()}</h3>
      <h3>Total a pagar: ${priceCart()} </h3>

      <button onClick={clearCart}>Vaciar el carrito</button>
      <button>
        <Link to={"/checkout"}>Comprar</Link>
      </button>
    </div>
  );
};

export default CartDetail;
