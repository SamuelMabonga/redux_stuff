import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchMovies, addToCart, addQuantity, subtractQuantity, emptyCart, removeFromCart } from '../actions/movieActions'

const movieUrls = [
  { 
    name : 'popular',
    link : 'https://api.themoviedb.org/3/movie/popular?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&page=1'
  },
  {
    name : 'latest',
    link : 'https://api.themoviedb.org/3/movie/top_rated?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&page=1'
  },
  {
    name : 'tvShows',
    link : 'https://api.themoviedb.org/3/movie/upcoming?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&page=1'
  }
]

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies(movieUrls)
  }

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

  propsCheck = () => {
    console.log(this.props.movies)
  }

  render () {
    const movieItems = this.props.movies.map(movie => {
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
                <button className="item-cart__button" onClick={() => this.addToCart(movie.id)}> + </button>
                <button className="item-cart__button" onClick={() => this.removeFromCart(movie.id)}> - </button>
              </div>
            </div>
          </div>
        )
      }
      return null
    })

    return (
      <div className="movie-section">
        <div className="movie-section__card">
          <div className="movie-section__category-title">
            <h3 className="trending">Popular Movies</h3>
            <button onClick={this.propsCheck}>Check Props</button>
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

Movies.propTypes = {
  fetchMovies : PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { fetchMovies, addToCart, addQuantity, subtractQuantity, emptyCart, removeFromCart })(Movies)