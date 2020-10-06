import React from 'react'

const SearchBar = () => {
  return (
    <div className="search-card">
      <div className="search-wrapper">
        <div className="search-content-wrapper">

          <div className="search-title-wrapper">
            <h1 className="search-title">Welcome.</h1>
            <h2 className="search-subtitle">Lots of movies, TV shows and people to discover. Explore now.</h2>
          </div>

          <div className="search-bar__wrapper">
            <div className="search-bar__content">
              <input type="text" id="searchQuery" className="search-query" placeholder="Enter name to search" />
              <button id="searchButton" onclick="search()" type="submit" className="search-button">
                  Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar