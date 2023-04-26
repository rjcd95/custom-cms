import React, { useState } from 'react';
import { SearchLabel, SearchInput, SearchButton, SearchMatches } from '../atoms/search';
import useLocalStorage from 'services/hooks/useLocalStorage';
import { POSTS_KEY } from 'common/constants';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matches, setMatches] = useState([]);
  const [posts] = useLocalStorage(POSTS_KEY);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    // filter posts by title or body containing the search term
    const inputValue = event.target.value;
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    if (inputValue === '') {
      setMatches([]);
    } else {
      setMatches(filteredPosts);
    }
  
    setSearchTerm(inputValue);
  };

  function handleSubmit(event) {
    event.preventDefault();
    handleSearchChange({ target: { value: searchTerm } });
  }

  return (
    <div className="search">
      <form className="search__form">
        <SearchLabel />
        <div>
          <SearchInput searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
          <SearchButton handleSubmit={handleSubmit} />
        </div>
        <SearchMatches matches={matches} />
      </form>
    </div>
  );
};

export default Search;
