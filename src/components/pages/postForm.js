import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostForm = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [postId, setPostId] = useState(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title,
      body,
      author,
      date: new Date().toISOString(),
    };

    if (postId) {
      // Edit an existing post
      const posts = JSON.parse(localStorage.getItem("posts"));
      const updatedPosts = posts.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            ...post,
          };
        }
        return p;
      });
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
    } else {
      // Add a new post
      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      const newPost = {
        ...post,
        id: Date.now(),
      };
      localStorage.setItem("posts", JSON.stringify([...posts, newPost]));
    }

    // Redirect back to the blog page
    window.location.href = "/blog";
  };
  
  const handleCancel = () => {
    window.location.href = "/blog";
  };

  const initializeForm = () => {
    if (postId) {
      const posts = JSON.parse(localStorage.getItem("posts"));
      const post = posts.find((p) => p.id === Number(postId));
      if (post) {
        setTitle(post.title);
        setBody(post.body);
        setAuthor(post.author);
        setPostId(post.id);
      }
    }
  };

  useEffect(() => {
    initializeForm();
  }, []);
  
  return (
    <div>
      <div className='container'>
        <div className="post-form">
            <h1>{postId ? "Edit Post" : "Add Post"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="post-form__form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="post-form__form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        name="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="post-form__form-group">
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div className="post-form__buttons">
                    <button className="post-form__buttons--cancel" type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button className="post-form__buttons--submit" type="submit">{postId ? "Save" : "Add"}</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
