import React from 'react';
import config from '../../../config';
require('./Menu.scss');

class Menu extends React.Component {
  render() {
    const encrypted = `${config.paypal.encrypted}==-----END PKCS7-----`;
    return(
      <div className="menubar">
        <div className="donate">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="encrypted" value={encrypted}/>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
          <img alt="" border="0" src="https://www.paypalobjects.com/ko_KR/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Menu;
