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

export default HeroText;
