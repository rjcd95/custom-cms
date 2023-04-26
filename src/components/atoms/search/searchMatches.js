import React from 'react';
import PropTypes from 'prop-types';

const SearchMatches = ({ matches }) => {
  if (matches.length === 0) return null;
  return (
    <ul className="search__matches">
      {matches.map((match) => (
        <li key={match.id}>{match.title}</li>
      ))}
    </ul>
  );
};

SearchMatches.propTypes = {
  matches: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};


export default SearchMatches;