import getExcerpt from "common/getExcerpt";
import React, { useState, useEffect } from "react";
import PostCard from "../atoms/postCard";
import Pagination from "../molecules/pagination";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const localPosts = JSON.parse(localStorage.getItem("posts"));
    if (localPosts) {
      setPosts(localPosts);
    }
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='container'>
        <h1>Blog</h1>
        <div className='blog'>
          <div className='blog-posts'>
            {currentPosts.map((post, index) => (
                <PostCard key={index} post={{
                    ...post,
                    excerpt: getExcerpt(post.body, 75)
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
