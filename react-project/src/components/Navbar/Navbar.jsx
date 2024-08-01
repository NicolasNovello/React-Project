import "./Navbar.css";
import CardWidget from "../CardWidget/CardWidget";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-titulo">
          <h1>El Botinero</h1>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Catalogo</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>

        <CardWidget />
      </nav>
    </>
  );
};
export default Navbar;
