import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchLatestMovies, addToCart, addQuantity, subtractQuantity, emptyCart, removeFromCart } from '../actions/movieActions'

class LatestMovies extends Component { 
  addToCart = (id) => {
    this.props.addToCart(id)
  }

  removeFromCart = (id) => {
    this.props.removeFromCart(id)
  }

  addQuantity = (id) => {
    this.props.addQuantity(id)
  }

  subtractQuantity = (id) => {
    this.props.subtractQuantity(id)
  }

  emptyCart = () => {
    this.props.emptyCart()
  }

  render () {
    const movieItems = this.props.movies.map(movie => {
      if (movie.category === 'latest') {
        return (
          <div key={movie.id} className="movie-section__movie-card">
            <div className="movie-card__image">
              <img className="movie-card__image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt="" />
            </div>
            <div className="movie-card__title-container">
              <h4 className="movie-card__title">{movie.title}</h4>
              <p className="movie-card__date">{movie.release_date}</p>
              <div className="item-cart__buttons">
                <button className="item-cart__button" onClick={() => this.addToCart(movie.id)}> + </button>
                <button className="item-cart__button" onClick={() => this.removeFromCart(movie.id)}> - </button>
              </div>
            </div>
          </div>
        )
      }
    })

    return (
      <div className="movie-section">
        <div className="movie-section__card">
          <div className="movie-section__category-title">
            <h3 className="trending">Latest Movies</h3>
          </div>
          <div className="movie-section__category">
            <div className="movie-section__category-content">
              {movieItems}
            </div>  
          </div>  
        </div>   
      </div>
    )
  }
}

LatestMovies.propTypes = {
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

export default connect(mapStateToProps, { addToCart, addQuantity, subtractQuantity, emptyCart, removeFromCart })(LatestMovies)
