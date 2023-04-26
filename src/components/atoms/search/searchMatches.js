import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchMatches = ({ matches, setMatches, setSearchTerm}) => {
  const handleOnClick = () => {
    setMatches([]);
    setSearchTerm('');
  };

  if (matches.length === 0) return null;
  return (
    <ul className="search__matches">
      {matches.map((match) => (
        <li key={match.id}>
          <Link
            to={`/post/${match.id}`}
            onClick={handleOnClick}
          >
            {match.title}
          </Link>
        </li>
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
  setMatches: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};


export default SearchMatches;