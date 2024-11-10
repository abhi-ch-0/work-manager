import React from 'react';
import './search-bar.css';

function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        aria-label="Search"
      />
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;