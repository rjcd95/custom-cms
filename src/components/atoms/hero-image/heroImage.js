import React from 'react';
import PropTypes from 'prop-types';

const HeroImage = ({ imageUrl, altText }) => (
  <div className="hero__image">
    <img src={imageUrl} alt={altText} />
  </div>
);

HeroImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default HeroImage;
