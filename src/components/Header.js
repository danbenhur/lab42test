import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      {/* <a
        className={classes.logo}
        href="https://www.linkedin.com/company/lab42cyber/posts/?feedView=all"
      >
        <img src="https://media-exp2.licdn.com/dms/image/C4E0BAQHbNkZQMNnpeA/company-logo_200_200/0/1636985753967?e=1663200000&v=beta&t=9BcPUArronxFdebbAL1uR83PrUwdfNr8G4tumGqxn7Q" />
      </a> */}

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
