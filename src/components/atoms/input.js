import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name, value, onChange, isRequired }) => {
    const handleOnChange = onChange ? onChange : () => {};
    return (
        <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={(e) => handleOnChange(e.target.value)}
            required={isRequired}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    isRequired: PropTypes.bool,
};

export default Input;
