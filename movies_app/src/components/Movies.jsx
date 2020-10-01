import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movieActions'

class Movies extends Component {
  componentWillMount() {
    this.props.fetchMovies()
  }

  render () {
    return (
      <div>
        <h1>Popular Movies</h1>
      </div>
    )
  }
}

Movies.propTypes = {
  fetchMovies : PropTypes.func.isRequired,
  movies : PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies.items
})

export default connect(mapStateToProps, { fetchMovies })(Movies)