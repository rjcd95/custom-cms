import React from 'react';
import PropTypes from 'prop-types';
import images from 'assets/data/images';

const HeroImage = ({ imageUrl, imageAlt }) => (
  <div className="hero__image">
    <img src={imageUrl} alt={imageAlt} />
  </div>
);

HeroImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

HeroImage.defaultProps = {
  imageUrl: images[0],
  imageAlt: 'Hero-Image',
}

export default HeroImage;
