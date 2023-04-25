import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ handleSearchChange }) => (
    <input
        id="searchInput"
        className="search__input"
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
    />
);

SearchInput.propTypes = {
    handleSearchChange: PropTypes.func.isRequired,
};

export default SearchInput;