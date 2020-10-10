import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { search } from '../actions/movieActions' 

const SearchBar = (props) => {
  const [ query, setQuery ] = useState('')

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  const searchMovies = () => {
    if (query) {
      props.search(query)
    }
    return null
  }

  return (
    <div className="search-card">
      <div className="search-wrapper">
        <div className="search-content-wrapper">

          <div className="search-content__space"></div>

          <div className="search-title-wrapper">
            <h1 className="search-title">Welcome.</h1>
            <h2 className="search-subtitle">Lots of movies, TV shows and people to discover. Explore now.</h2>
          </div>

          <div className="search-bar__search-bar">
            <div className="search-bar__wrapper">
              {/* <div className="search-bar__spacer"></div> */}
              <div className="search-bar__content">
                <input type="text" id="searchQuery" className="search-query" placeholder="Enter name to search" value={query} onChange={onChange}/>
                <button id="searchButton" type="submit" className="search-button" onClick={searchMovies}>
                    Search
                </button>
              </div>
              {/* <div className="search-bar__spacer"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  search : PropTypes.func.isRequired,
  
}

const mapStateToProps = state => ({
  search : state.movies.search
})

export default connect(mapStateToProps, { search })(SearchBar)