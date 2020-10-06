import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, addQuantity, subtractQuantity, emptyCart, removeFromCart } from '../actions/movieActions'

const MoviesHooks = (props) => {
  // useEffect(() => {
  //   props.fetchPopularMovies()  // eslint-disable-next-line
  // }, [])
  
  const addToCart = (id) => {
    props.addToCart(id)
  }

  const removeFromCart = (id) => {
    props.removeFromCart(id)
  }

  const addQuantity = (id) => {
    props.addQuantity(id)
  }

  const subtractQuantity = (id) => {
    props.subtractQuantity(id)
  }

  const emptyCart = () => {
    props.emptyCart()
  }

  const movieItems = props.movies.map(movie => {
    if (movie.category === 'popular') {
      return (
        <div key={movie.id} className="movie-section__movie-card">
          <div className="movie-card__image">
            <img className="movie-card__image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt="" />
          </div>
          <div className="movie-card__title-container">
            <h4 className="movie-card__title">{movie.title}</h4>
            <p className="movie-card__date">{movie.release_date}</p>
            <div className="item-cart__buttons">
                <button className="item-cart__button" onClick={() => addToCart(movie.id)}> + </button>
                <button className="item-cart__button" onClick={() => removeFromCart(movie.id)}> - </button>
              </div>
          </div>
        </div>
      )
    }
  })

  return (
    movieItems
  )
}

MoviesHooks.propTypes = {
  addToCart : PropTypes.func.isRequired,
  removeFromCart : PropTypes.func.isRequired,
  addQuantity : PropTypes.func.isRequired,
  subtractQuantity : PropTypes.func.isRequired,
  emptyCart : PropTypes.func.isRequired,
  movies : PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies.movies
})

export default connect(mapStateToProps, { addToCart, addQuantity, subtractQuantity, emptyCart, removeFromCart })(MoviesHooks)