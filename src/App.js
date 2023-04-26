import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import getInitialData from "./common/getInitialData";
import Header from './components/organisms/header';
import Home from 'components/pages/home';
import Footer from 'components/atoms/footer';
import About from 'components/pages/about';
import Contact from 'components/pages/contact';
import Blog from 'components/pages/blog';
import PostDetail from 'components/pages/postDetail';
import './assets/scss/index.scss';
import PostForm from 'components/pages/postForm';

const App = () => {
  const initialData = getInitialData();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("posts"));

    if (!data) {
      localStorage.setItem("posts", JSON.stringify(initialData));
    }
  }, [initialData]);

  return (
    <div className="App">
      <Router>
        <div>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/post/new" element={<PostForm />} />
              <Route path="/post/:id/edit/" element={<PostForm />} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
