import "./Navbar.css";
import CardWidget from "../CardWidget/CardWidget";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <Link className="navbar-titulo" to="/">
            FunkoWorld
          </Link>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <NavLink
                to="/category/Marvel"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                MARVEL
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/DC"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                DC
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/DragonBall"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                DRAGON BALL
              </NavLink>
            </li>
          </ul>
        </div>

        <CardWidget />
      </nav>
    </>
  );
};
export default Navbar;
