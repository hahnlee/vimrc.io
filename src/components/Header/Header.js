import React from 'react';
require('./Header.scss');

class Header extends React.Component {
  render() {
    const logoImage = require('./logo.png');
    
    return (
      <header className="header">
        <div className="nav-logo">
          <img src={logoImage} />
        </div>
        <div className="nav">
        </div>
      </header>
    );
  }
}

export default Header;
