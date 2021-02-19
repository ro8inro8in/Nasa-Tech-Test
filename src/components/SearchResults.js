import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({results}) => {
  if (!results) {
    return <p> No results </p>;
  } else {
    return (
      <>
      <div className = "nasa-image">
        {results.map((image) => (
          <img className="card-image" src={image} alt="space-image" />
        ))}
        </div>
      </>
    );
  }
};

export default SearchResults;

SearchResults.PropTypes = {
  results: PropTypes.array.isRequired,
};
