import React, { useState, useEffect } from 'react';
import Header from './components/organisms/header';
import Hero from './components/molecules/hero';
import initialData from "./assets/data/initialData";
import './assets/scss/index.scss';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("posts"));

    if (!data) {
      localStorage.setItem("posts", JSON.stringify(initialData));
      setPosts(initialData);
    } else {
      setPosts(data);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
