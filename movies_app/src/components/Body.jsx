import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom' 

import PopularMovies from './PopularMovies'
import LatestMovies from './LatestMovies'
import TvShows from './TvShows'
import SearchResults from './SearchResults'

const Body = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        {props.search ? <Redirect to="/search" /> : <PopularMovies />}
      </Route>

      <Route path="/latest">
        {props.search ? <Redirect to="/search" /> : <LatestMovies />}
      </Route> 

      <Route>
        {props.search ? <Redirect to="/search" /> : <TvShows />} 
      </Route> 

      <Route path="/search" component={SearchResults} />     
    </Switch>
  )
}

Body.propTypes ={
  search : PropTypes.bool,
}

const mapStateToProps = (state) => ({
  search : state.movies.search
})

export default connect(mapStateToProps)(Body)