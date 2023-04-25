import React from 'react';

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

export default SearchMatches;