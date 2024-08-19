import "./Navbar.css";
import CardWidget from "../CardWidget/CardWidget";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-titulo">
          <h1>
            <Link to="/">FunkoWorld</Link>
          </h1>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/category/Marvel">MARVEL</Link>
            </li>
            <li>
              <Link to="/category/DC">DC</Link>
            </li>
            <li>
              <Link to="/category/DragonBall">DRAGON BALL</Link>
            </li>
          </ul>
        </div>

        <CardWidget />
      </nav>
    </>
  );
};
export default Navbar;
