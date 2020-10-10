import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const SearchResults = (props) => {
  const movieItems = props.movies.map(movie => {
    console.log(props)

    return (
      <div key={movie.id} className="movie-section__movie-card">
        <div className="movie-card__image">
          <img className="movie-card__image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt="" />
        </div>
        <div className="movie-card__title-container">
          <h4 className="movie-card__title">{movie.title}</h4>
          <p className="movie-card__date">{movie.release_date}</p>
          <div className="item-cart__buttons">
              <button className="item-cart__button"> + </button>
              <button className="item-cart__button"> - </button>
            </div>
        </div>
      </div>
    )
  })

  return (
    <div>
      <h1>Search Results!</h1>
      {movieItems}
    </div>
  ) 
}

SearchResults.propTypes = {
  search : PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  movies : state.movies.searchMovies
})

export default connect(mapStateToProps)(SearchResults)