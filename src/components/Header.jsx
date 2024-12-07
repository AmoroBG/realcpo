import React from "react";
import realCPOLogo from "../assets/logo-realCPO.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar">
          <img src={realCPOLogo} alt="RealCPO Logo" className="logo" />
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <button>Get started</button>
      </nav>
    </header>
  );
};

export default Header;
