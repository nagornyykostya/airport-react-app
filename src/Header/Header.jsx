import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg"

const Header = () => {
  return (
    <header className="header-wrapper">
        <Link className="header-wrapper__logo-container" to="/">
          <img
            className="header-wrapper__logo"
            src={logo}
            alt="logo"
          />
                  <span>Kyiv Sikorskiy airport</span>
        </Link>
      <ul className="header-navigation">
        <li>
          <Link className="header-navigation__item" to="/">Flights</Link>
        </li>
        <li>
          <Link className="header-navigation__item" to="/news">News</Link>
        </li>
        <li>
          <Link className="header-navigation__item" to="/contacts">Contacts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
