import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../atoms/thumbnail';
import images from 'assets/data/images';

const GalleryImages = ({ images }) => {
    return (
        <div className="gallery row">
            {images.map((image, index) => (
                <Thumbnail className="col" key={index} imageUrl={image.url} imageAlt={image.caption} />
            ))}
        </div>
    );
};

GalleryImages.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            caption: PropTypes.string.isRequired,
        })
    ),
};

GalleryImages.defaultProps = {
    images: [images[0], images[1], images[2]],
}

export default GalleryImages;
