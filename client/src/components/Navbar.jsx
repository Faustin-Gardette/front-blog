import React from "react";
import Logo from "../img/blog.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=techno">
            <h6>TECHNO</h6>
          </Link>
          <Link className="link" to="/?cat=ciné">
            <h6>CINÉ</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=nourriture">
            <h6>NOURRITURE</h6>
          </Link>
          <span>Jhon</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Postez
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
