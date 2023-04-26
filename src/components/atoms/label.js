import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, title }) => <label htmlFor={htmlFor}>{title}</label>;

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
};

export default Label;
