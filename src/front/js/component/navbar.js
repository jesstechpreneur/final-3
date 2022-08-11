import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";
import myImage from "../../img/1.png";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar">
      <Link to="/">
        <img id="navbarLogo" src={myImage}></img>
      </Link>
      <div className="ml-auto">
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <Link to="/shop">
          <button className="btn">Favorites</button>
        </Link>
        <Link to="/checkout">
          <button className="btn">Checkout</button>
        </Link>
      </div>
    </nav>
  );
};
