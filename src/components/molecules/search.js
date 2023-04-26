import React, { useRef, useEffect, useState } from 'react';
import { SearchLabel, SearchInput, SearchButton, SearchMatches } from '../atoms/search';
import useLocalStorage from 'services/hooks/useLocalStorage';
import { POSTS_KEY } from 'common/constants';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matches, setMatches] = useState([]);
  const [posts] = useLocalStorage(POSTS_KEY);
  const ref = useRef(null);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    // filter posts by title or content containing the search term
    const inputValue = event.target.value;
    const filteredPosts = posts.filter(
      (post) => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setMatches([]);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);


  return (
    <div ref={ref} className="search">
      <form className="search__form">
        <SearchLabel />
        <div>
          <SearchInput searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
          <SearchButton handleSubmit={handleSubmit} />
        </div>
        <SearchMatches
          matches={matches}
          setMatches={setMatches}
          setSearchTerm={setSearchTerm}
        />
      </form>
    </div>
  );
};

export default Search;
