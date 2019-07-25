import React from 'react';
import logo from '../../../hellofresh-logo.svg';
import { Link } from 'react-router-dom';
import { AppStyles, AppHeader, AppLogo, AppTitle } from './styles';

const Header = ({ renderer }) => {
  return (
    <div className={renderer.renderRule(AppStyles)}>
      <header className={renderer.renderRule(AppHeader)}>
        <Link to="/">
          <img src={logo} className={renderer.renderRule(AppLogo)} alt="logo" />
          <h1 className={renderer.renderRule(AppTitle)}>Recipes</h1>
        </Link>
      </header>
    </div>
  );
};

export default Header;
