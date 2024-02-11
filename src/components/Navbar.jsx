import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div id="navbar" style={{ height: isScrolled ? "7vh" : "8vh" }}>
        <div id="logo">
          <a href="/">
            <img
              src={logo}
              alt="ambuvians Logo"
              id="logo1"
              style={{ height: isScrolled ? "7vh" : "8vh" }}
            />
          </a>
        </div>
        <div className="right-header">
          <div>
            <ul className="links right-header-element">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/join">Join Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="login-btn">
                <Link to="/login">Login | Sign Up</Link>
              </li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="toggle_btn" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
            </div>
          </div>
        </div>
      </div>
      <div className={`dropdown_menu ${isMenuOpen ? "open" : ""}`}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/join">Join Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
