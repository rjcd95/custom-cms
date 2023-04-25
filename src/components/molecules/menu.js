import React from 'react';
import MenuLink from '../atoms/menuLink';

const Menu = () => (
  <ul className="menu">
    <MenuLink title="Home" url="/" />
    <MenuLink title="About" url="/about" />
    <MenuLink title="Blog" url="/blog" />
    <MenuLink title="Contact" url="/contact" />
  </ul>
);

export default Menu;
