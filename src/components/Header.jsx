// src/components/Header.js
import React from 'react';
import logo from '../assets/react.svg';
import '../assets/styles.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Company Logo" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="#login">Login</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#logout">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
