import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // retrieve posts from local storage
      const storedPosts = localStorage.getItem("posts");
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      }
    }, []);

    return (
        <div className='container'>
            <div className='blog'>
                <h1>Blog Page</h1>
                <ul>
                    {posts.map((post, index) => (
                    <li key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Blog;
