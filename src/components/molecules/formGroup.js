import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/atoms/input';
import Label from 'components/atoms/label';
import TextArea from 'components/atoms/textarea.js';

const FormGroup = ({ title, classes, type, name, value, onChange, isRequired = false }) => {
    const handleOnChange = onChange ? onChange : () => {};
    const customClasses = `form-group ${classes ? classes : ''}}`
    return (
        <div className={customClasses}>
            <Label
                htmlFor={name}
                title={`${title} ${isRequired ? '*' : ''}`}
            ></Label>
            {type === 'textarea' ? (
                <TextArea
                    name={name}
                    value={value}
                    onChange={handleOnChange}
                    isRequired={isRequired} />
            ) : (
                <Input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleOnChange}
                    isRequired={isRequired}
                />
            )}
        </div>
    );
};

FormGroup.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    onClick: PropTypes.func
};

export default FormGroup;
