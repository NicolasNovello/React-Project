import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext/CartProvider";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { cart, priceCart, removeCart } = useContext(CartContext);

  const [nombre, setNombre] = useState("");

  const [telefono, setTelefono] = useState("");

  const [email, setEmail] = useState("");

  const [emailConfirmacion, setEmailConfirmacion] = useState("");

  const [error, setError] = useState("");

  const [orderId, setOrderId] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (!nombre || !telefono || !email || !emailConfirmacion) {
      setError("Por favor, completa todos los campos ");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden");
      return;
    }

    const db = getFirestore();

    const order = {
      items: cart.map((product) => ({
        id: product.product.id,
        name: product.product.name,
        quantity: product.quantity,
      })),
      total: priceCart(),
      nombre,
      telefono,
      email,
    };

    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "products", productOrder.id);
        const productDoc = await getDoc(productRef);
        const stock = productDoc.data().stock;
        await updateDoc(productRef, {
          stock: stock - productOrder.quantity,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            removeCart();
          })
          .catch((error) => {
            console.log("Error de sistema", error);
            setError("Hubo un fallo, intentelo de nuevo");
          });
      })
      .catch((error) => {
        console.log("error de sistema", error);
        setError("El stock no puede ser actualizado");
      });
  };
  return (
    <div className="containeer">
      <h3>
        Complete el siguiente Formulario para poder terminar con su compra
      </h3>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Telefono</label>
          <input type="number" onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Confirmar Email</label>
          <input
            type="email"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        <button type="submit">Finalizar compra</button>

        {error && <p>{error}</p>}
        {orderId && (
          <p>
            ¡Gracias por tu compra! Tu numero de orden es: {orderId}
            {""}
          </p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
