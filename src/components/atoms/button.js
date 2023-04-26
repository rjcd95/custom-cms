import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, classes, text, onClick }) => {
    const handleOnclick = onClick ? onClick : () => {};
    const className = `button default ${classes}`;
    return (
        <button type={type} className={className} onClick={handleOnclick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;
