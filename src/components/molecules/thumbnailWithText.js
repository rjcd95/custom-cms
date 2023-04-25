import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from 'components/atoms/thumbnail';
import SimpleText from 'components/atoms/simpleText';
import images from 'assets/data/images';

const ThumbnailWithText = ({ thumbnailSrc, text }) => {
  return (
    <div className="thumbnailWithText">
      <Thumbnail imageUrl={thumbnailSrc} />
      <div className="thumbnailWithText__content">
        <SimpleText text={text} />
      </div>
    </div>
  );
};

ThumbnailWithText.propTypes = {
  thumbnailSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ThumbnailWithText.defaultProps = {
  thumbnailSrc: images[1].url,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

export default ThumbnailWithText;
