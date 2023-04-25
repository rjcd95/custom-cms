import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import initialData from "./assets/data/initialData";
import Header from './components/organisms/header';
import Home from 'components/pages/home';
import Footer from 'components/atoms/footer';
import About from 'components/pages/about';
import Blog from 'components/pages/blog';
import Contact from 'components/pages/contact';
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
      <Router>
        <div>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
