import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="blog-posts__post-card">
      <div className="blog-posts__post-card__content">
        <h2 className="blog-posts__post-card__content--title">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="blog-posts__post-card__content--excerpt">{post.excerpt}</p>
      </div>
      <div className="blog-posts__post-card__meta">
          <span className="blog-posts__post-card__meta--author">{post.author}</span>
          <span className="blog-posts__post-card__meta--date">{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="blog-posts__post-card__read-more">
          <a href={`/post/${post.id}`} className="post-card__cta-btn">
            Read More
          </a>
        </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
