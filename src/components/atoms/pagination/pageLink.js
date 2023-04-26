import React from "react";
import PropTypes from "prop-types";

const PageLink = ({ pageNumber, handleClick, isActive }) => {
  return (
    <button
      className={`pagination__links-link ${isActive ? "active" : ""}`}
      onClick={() => handleClick(pageNumber)}
    >
      {pageNumber}
    </button>
  );
};

PageLink.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default PageLink;
