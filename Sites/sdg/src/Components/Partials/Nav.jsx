import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/goals">Verdensmål</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      <hr />
    </nav>
  );
};
