import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
};

export default Search;

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
