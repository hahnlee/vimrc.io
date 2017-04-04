import React from 'react';
import { DonateButton, Menu }from 'components';
import './MenuList.scss';

const MenuList = () => (
  <div className="menubar">
    <div className="menubar-wrapper">
      <Menu/>
      <DonateButton/>
    </div>
  </div>
);

export default MenuList;
