import React, { useState } from "react";
import PropTypes from "prop-types";
import { PageNumber, PageLink } from "../atoms/pagination";

const Pagination = ({ postsPerPage, totalPosts, paginate, setPostsPerPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };
  
  const handleSelectChange = (event) => {
    const newPostsPerPage = parseInt(event.target.value);
    setCurrentPage(1);
    setPostsPerPage(newPostsPerPage);
    paginate(1);
  };

  return (
    <div className="pagination">
      <div className="pagination__selector">
        <label htmlFor="posts-per-page">Posts per page:</label>
        <select id="posts-per-page" value={postsPerPage} onChange={handleSelectChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
      <div className="pagination__links">
        {pageNumbers.map((number) => (
          <PageLink
            key={number}
            pageNumber={number}
            handleClick={handleClick}
            isActive={currentPage === number}
          />
        ))}
      </div>
      <div className="pagination__numbers">
        <PageNumber
          currentPage={currentPage}
          totalPosts={totalPosts}
          postsPerPage={postsPerPage}
        />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
