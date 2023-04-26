import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const MenuLink = ({ title, url }) => {
  const location = useLocation();
  const isActiveMenu = location.pathname === url;
  return (
    <li className={`menu-link ${isActiveMenu ? 'active' : ''}`}>
      <a href={url}>{title}</a>
    </li>
  );
};

MenuLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

MenuLink.defaultProps = {
  title: 'Home',
  url: '/',
}

export default MenuLink;
