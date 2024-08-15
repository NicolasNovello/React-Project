import "./Navbar.css";
import CardWidget from "../CardWidget/CardWidget";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-titulo">
          <h1>FunkoWorld</h1>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#">MARVEL</a>
            </li>
            <li>
              <a href="#">DC</a>
            </li>
            <li>
              <a href="#">DRAGON BALL</a>
            </li>
          </ul>
        </div>

        <CardWidget />
      </nav>
    </>
  );
};
export default Navbar;
