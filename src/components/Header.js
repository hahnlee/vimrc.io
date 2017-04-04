import React from 'react';
import './Header.scss';
import logoImage from 'assets/logo.png';

const Header = () => (
  <header className="header">
    <div className="nav-logo">
      <img src={logoImage} alt="logo"/>
    </div>
    <div className="nav">
    </div>
  </header>
);

export default Header;
