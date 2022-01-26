import React from "react";
import { Link } from "react-router-dom";
import Style from "./navigation.module.scss";

export function Navigation() {
  // Vores navigation med:
  //  - 4 <Link> fra react-router-dom
  //  - vores stylesheet module

  return (
    <nav className={Style.navBar}>
      <ul>
        <li>
          <Link to="/home">FORSIDE</Link>
        </li>
        <li>
          <Link to="/products">PRODUKTER</Link>
        </li>
        <li>Bageriet</li>
        <li>
          <Link to="/contact">KONTAKT</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}
