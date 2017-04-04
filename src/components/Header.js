import React from 'react';
import './Header.scss';

const Header = () => {
  const logoImage = require('assets/logo.png');
    
  return (
    <header className="header">
      <div className="nav-logo">
        <img src={logoImage} alt="logo"/>
      </div>
      <div className="nav">
      </div>
    </header>
  );
}

export default Header;
