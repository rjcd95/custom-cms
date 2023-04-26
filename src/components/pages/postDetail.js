import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import backIcon from 'assets/images/back.svg';
import editIcon from 'assets/images/edit.svg';
import trashIcon from 'assets/images/trash.svg';
import useLocalStorage from 'services/hooks/useLocalStorage';
import { POSTS_KEY } from 'common/constants';

const PostDetail = () => {
  const navigate = useNavigate();
  const { id: postId } = useParams();
  let post;

  // Retrieve the post from local storage
  const [posts, setPosts] = useLocalStorage(POSTS_KEY);
  if (posts) {
    const currentPost = posts.find(postItem => postItem.id === parseInt(postId));
    if (currentPost) {
      post = currentPost;
    }
  }

  const handleOnDelete = () => {
    if (post) {
      if (window.confirm("Do you really want to delete this post?")) { 
        const updatedPosts = posts.filter(postItem => postItem.id !== post.id);
        setPosts(updatedPosts);
        alert("Post deleted successfully!");
        navigate('/blog');
      }
    }
  };

  if (!post) { return null };

  return (
    <div>
      <div className='container'>
        <div className="blog-detail">
          <div className="blog-detail__title">
            <Link to="/blog">
              <img className='blog-detail__title--back-icon' src={backIcon} alt="back" />
            </Link>
            <h1 className="blog-detail__title">{post.title}</h1>
            <Link to={`/post/${postId}/edit`}>
              <img className='blog-detail__title--edit-icon' src={editIcon} alt="edit" />
            </Link>
            <img className='blog-detail__title--delete-icon' src={trashIcon} alt="delete" onClick={handleOnDelete}/>
          </div>
          <div className="blog-detail__meta">
            <span className="blog-detail__author">{post.author}</span>
            <span className="blog-detail__date">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="blog-detail__content">{post.content}</div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
