import React from 'react';

const SearchInput = ({ handleSearchChange }) => (
    <input
        id="searchInput"
        className="search__input"
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
    />
);

export default SearchInput;