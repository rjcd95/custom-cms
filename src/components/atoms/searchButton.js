import React from 'react';

const SearchButton = ({ handleSubmit }) => (
    <button className="search__submit" type="submit" onClick={handleSubmit}>Search</button>
);

export default SearchButton;
