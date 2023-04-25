import React from 'react';
import PropTypes from 'prop-types';

function HeroText({ title, subtitle }) {
  return (
    <div className="hero__text">
      <h1 className="hero__text--title">{title}</h1>
      <h2 className="hero__text--subtitle">{subtitle}</h2>
    </div>
  );
}

HeroText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

HeroText.defaultProps = {
  title: 'Lorem Ipsum',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
}

export default HeroText;
