import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({results}) => {
  return results ? (
    results.map((result) => {
      return (
        <>
          <div className="image-container">
            <img
              className="image"
              src={result}
              alt="Search result from NASA database"
              data-testid="image"
            />
          </div>
        </>
      );
    })
  ) : (
    <p></p>
    );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired
};

export default SearchResults;
