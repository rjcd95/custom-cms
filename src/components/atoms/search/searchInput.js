import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ handleSearchChange, searchTerm }) => (
    <input
        id="searchInput"
        className="search__input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
    />
);

SearchInput.propTypes = {
    handleSearchChange: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
};

export default SearchInput;