import "./CardWidget.css";
import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartProvider";
import { Link } from "react-router-dom";
const CardWidget = () => {
  const { totalProducts } = useContext(CartContext);
  return (
    <>
      <Link to={"/cart"} className="nav-cart">
        <BsCart3 />
        {totalProducts() === 0 ? null : totalProducts()}
      </Link>
    </>
  );
};

export default CardWidget;
