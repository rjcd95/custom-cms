import { POSTS_KEY } from 'common/constants';
import Button from 'components/atoms/button';
import FormGroup from 'components/molecules/formGroup';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useLocalStorage from 'services/hooks/useLocalStorage';

const PostForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState(id);
  const [posts, setPosts] = useLocalStorage(POSTS_KEY);

  const goToPreviousPage = () => {
    let urlToRedirect = '/blog';
    if (postId) {
      urlToRedirect = `/post/${postId}`;
    }
    window.location.href = urlToRedirect;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title,
      content,
      author,
      date: new Date().toISOString(),
    };

    if (postId) {
      // Edit an existing post
      const updatedPosts = posts.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            ...post,
          };
        }
        return p;
      });
      setPosts(updatedPosts);
    } else {
      // Add a new post
      const newPost = {
        ...post,
        id: Date.now(),
      };
      setPosts([...posts, newPost]);
    }

    // Redirect back to the previous page
    goToPreviousPage();
  };

  const handleCancel = () => {
    goToPreviousPage();
  };

  const initializeForm = () => {
    if (postId) {
      const post = posts.find((p) => p.id === Number(postId));
      if (post) {
        setTitle(post.title);
        setContent(post.content);
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
              <FormGroup
                title='Title'
                classes='post-form__form-group'
                type='text'
                name='title'
                value={title}
                onChange={setTitle}
                isRequired={true}
              />
              <FormGroup
                title='Content'
                classes='post-form__form-group'
                type='textarea'
                name='title'
                value={content}
                onChange={setContent}
                isRequired={true}
              />
              <FormGroup
                title='Author'
                classes='post-form__form-group'
                type='text'
                name='author'
                value={author}
                onChange={setAuthor}
                isRequired={true}
              />
              <div className="post-form__buttons">
                  <Button classes="cancel" type="button" text='Cancel' onClick={handleCancel}></Button>
                  <Button classes="submit" type="submit" text={postId ? "Save" : "Add"}></Button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
