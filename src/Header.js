import React from "react";
import logo from "./images/logo.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    // <div className="header__out">
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={logo} alt="logo " />
      </Link>
      <div className="header__center">
        <input type="text" className="input__search" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
    // </div>
  );
}

export default Header;
