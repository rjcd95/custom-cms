import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = ({ handleSubmit }) => (
    <button className="search__submit" type="submit" onClick={handleSubmit}>Search</button>
);

SearchButton.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default SearchButton;