import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";

const SearchResults = ({ results }) => {
  !results.length ? (
    <p>No Results</p>
  ) : (
    results.map((image) => (
      <img className="card-image" src={image} alt="spaceImage" />
    ))
  );
};

export default SearchResults;

SearchResults.PropTypes = {
results: PropTypes.string.isRequired
}


