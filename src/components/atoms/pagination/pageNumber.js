import React from "react";
import PropTypes from "prop-types";

const PageNumber = ({ currentPage, totalPosts, postsPerPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  return (
    <div className="pagination__numbers--page-number">
      <p>
        Showing {currentPage} of {totalPages} pages
      </p>
    </div>
  );
};

PageNumber.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
};

export default PageNumber;
