import React from 'react';
import PropTypes from 'prop-types';

const MenuLink = ({ title, url }) => (
  <li className="menu-link">
    <a href={url}>{title}</a>
  </li>
);

MenuLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

MenuLink.defaultProps = {
  title: 'Home',
  url: '/',
}

export default MenuLink;
