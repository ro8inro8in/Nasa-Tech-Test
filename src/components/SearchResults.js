import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({results}) => {
  if (!results) {
    return <p> No results </p>;
  } else {
    return (
      <>
      <div className = "image-container">
        {results.map((image) => (
          <img className="card-image" src={image} alt="space-image" />
        ))}
        </div>
      </>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired
};

export default SearchResults;
