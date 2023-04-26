import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ name, value, onChange, isRequired }) => {
    const handleOnChange = onChange ? onChange : () => {};
    return (
        <textarea
            name={name}
            value={value}
            onChange={(e) => handleOnChange(e.target.value)}
            required={isRequired}
        ></textarea>
    );
};

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    isRequired: PropTypes.bool,
};

export default TextArea;
