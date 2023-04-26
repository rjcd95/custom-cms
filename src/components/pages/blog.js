import React, { useState } from "react";
import { Link } from 'react-router-dom';
import PostCard from "../atoms/postCard";
import Pagination from "../molecules/pagination";
import getExcerpt from "common/getExcerpt";
import addIcon from 'assets/images/add.svg';
import useLocalStorage from 'services/hooks/useLocalStorage';
import { POSTS_KEY } from "common/constants";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [posts] = useLocalStorage(POSTS_KEY);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='container'>
        <div className='blog'>
          <div className="blog-title">
            <h1>Blog</h1>
            <Link to={`/post/new`}>
              <img className='blog-title--add-icon' src={addIcon} alt="add" />
            </Link>
          </div>
          <div className='blog-posts'>
            {currentPosts.map((post, index) => (
                <PostCard key={index} post={{
                    ...post,
                    excerpt: getExcerpt(post.content, 75)
                }}/>
            ))}
          </div>
          <div className='blog-pagination'>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              currentPage={currentPage}
              setPostsPerPage={setPostsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
