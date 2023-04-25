import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ src }) => (
    <div className="video">
        <iframe
            src={src}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </div>
);

Video.propTypes = {
    src: PropTypes.string.isRequired,
};

Video.defaultProps = {
    src: "https://www.youtube.com/embed/DmCZoiCp5C0",
}

export default Video;
