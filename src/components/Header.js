import React from 'react';
import GithubCorner from 'react-github-corner';
import logoImage from 'assets/logo.png';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="nav-logo">
      <img src={logoImage} alt="logo"/>
    </div>
    <div className="nav">
    </div>
    <GithubCorner
      href="https://github.com/sn0wle0pard/vimrc.io"
      bannerColor="#FFF"
      octoColor="#3F3F3F"
      direction="right"
    />
  </header>
);

export default Header;