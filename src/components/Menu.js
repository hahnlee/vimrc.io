import React from 'react';
import { Link } from 'react-router';
import './Menu.scss';

const Menu = () => (
  <nav className="sitemap">
    <ul>
      <li>
        <Link to="/">Default</Link>
      </li>
      <li>
        <Link to="/display">Display</Link>
      </li>
      <li>
        <Link to="/edit">Edit</Link>
      </li>
      <li>
        <Link to="/file">File</Link>
      </li>
      <li>
        <Link to="/gui">Gui</Link>
      </li>
      <li>
        <Link to="/unclassified">Unclassified</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
