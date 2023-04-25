import React from 'react';

const MenuLink = ({ title, url }) => (
  <li className="menu-link">
    <a href={url}>{title}</a>
  </li>
);

export default MenuLink;
