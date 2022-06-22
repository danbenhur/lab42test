import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/browse-beers">
              Browse Beers
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/favorite-beers">
              Favorite Beers
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
