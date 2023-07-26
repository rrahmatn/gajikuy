import React from "react";
import "./navbar.css";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bungkusNavbar">
      <p>Mamat</p>
      <Link to="/" className="linkProf">
        <RiLogoutBoxRFill />
      </Link>
    </div>
  );
};
export default Navbar;
