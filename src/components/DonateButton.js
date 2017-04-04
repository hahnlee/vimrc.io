import React from 'react';
import config from '../../config';

const encrypted = config.paypal.encrypted;
const paypalAlt = "PayPal - The safer, easier way to pay online!";

const Donate = () => (
  <div className="bottom-content">
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick"/>
      <input type="hidden" name="encrypted" value={encrypted}/>
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt={paypalAlt}/>
      <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
    </form>
  </div>
);

export default Donate;
