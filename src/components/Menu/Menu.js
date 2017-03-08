import React from 'react';
import config from '../../../config';
import { Link } from 'react-router';
require('./Menu.scss');

class Menu extends React.Component {
  render() {
    
    const encrypted = `-----BEGIN PKCS7-----${config.paypal.encrypted}==-----END PKCS7-----`;
    const paypalAlt = "PayPal - The safer, easier way to pay online!";

    const bottom = (
      <div className="bottom-content">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="encrypted" value={encrypted}/>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt={paypalAlt}/>
          <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
        </form>
      </div>
    );

    const navBar = (
      <nav className="sitemap">
        <ul>
          <li>
            <Link to="/">Default</Link>
          </li>
          <li>
            <Link to="/display">Display</Link>
          </li>
          <li>
            <Link to="/file">File</Link>
          </li>
          <li>
            <Link to="/gui">Gui</Link>
          </li>
        </ul>
      </nav>
    );

    return(
      <div className="menubar">
        <div className="menubar-wrapper">
          {navBar}
          {bottom}
        </div>
      </div>
    );
  }
}

export default Menu;
