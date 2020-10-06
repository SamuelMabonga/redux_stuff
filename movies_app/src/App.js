import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

// import provider
import { Provider } from 'react-redux'

import Header from './components/Header'
import PopularMovies from './components/PopularMovies'
import LatestMovies from './components/LatestMovies'
import TvShows from './components/TvShows'
import MoviesHooks from './components/MoviesHooks'

import store from './store'


function App() {
  return (
    <Router>
      <Provider store = {store}>
        <Header />

        <Switch>

          <Route path="/" exact component={PopularMovies} />

          <Route path="/latest" component={LatestMovies} />

          <Route path="/tvshows" component={TvShows} />

        </Switch>

      </Provider>
    </Router>
  );
}

export default App;
