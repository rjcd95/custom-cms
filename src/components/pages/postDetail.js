import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import backIcon from 'assets/images/back.svg';
import editIcon from 'assets/images/edit.svg';

const PostDetail = () => {
  const { id: postId } = useParams();
  let post;

  // Retrieve the post from local storage
  const posts = JSON.parse(localStorage.getItem("posts"));
  if (posts) {
    const currentPost = posts.find(postItem => postItem.id === parseInt(postId));
    if (currentPost) {
      post = currentPost;
    }
  }

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
          </div>
          <div className="blog-detail__meta">
            <span className="blog-detail__author">{post.author}</span>
            <span className="blog-detail__date">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="blog-detail__content">{post.body}</div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
