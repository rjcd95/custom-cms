import React from 'react';
import PropTypes from 'prop-types';
import images from 'assets/data/images';

const Thumbnail = ({ imageUrl, imageAlt }) => (
  <div className="thumbnail">
    <img
        src={imageUrl}
        alt={imageAlt} 
        style={{ maxWidth: '250px', height: '120px' }}/>
  </div>
);

Thumbnail.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

Thumbnail.defaultProps = {
  imageUrl: images[1].url,
  imageAlt: 'Thumbnail',
}

export default Thumbnail;
