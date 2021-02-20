import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState();
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasa-logo"
      />
      <Search setSearchResults={setSearchResults} />
      <div className="search-results">
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
}

export default App;
