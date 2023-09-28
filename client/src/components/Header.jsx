import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

function Header() {
  return (
    <header>

{/* <!-- Bootstrap CSS -->
    <Link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    /> */}


      <Link to="/" className="logo">
        <img src={logo} alt="ReactJs" /> ReactJs
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
