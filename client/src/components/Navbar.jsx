import React from "react";
import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
/* import logo from "../assets/logo.png";
 */
const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__ul">
        <Link className="navbar__ul--li" to="/">
          <button className="navbar__ul--li--button">
            Start
            {/* {<img className="logo" alt="logo" src={logo} />} */}
          </button>
        </Link>
        <Link className="navbar__ul--li" to="/home">
          <button className="navbar__ul--li--button">Home</button>
        </Link>
        <Link className="navbar__ul--li" to="/home/create">
          <button className="navbar__ul--li--button">Create Activity</button>
        </Link>
        <Link className="navbar__ul--li" to="/home/about">
          <button className="navbar__ul--li--button">About us</button>
        </Link>
        <SearchBar className="navbar__ul--li--searchbar" />
      </li>
    </ul>
  );
};

export default Navbar;
