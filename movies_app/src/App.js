import React from 'react';
import './App.css';

// import provider
import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Body from './components/Body'

import store from './store'


function App() {
  return (
    <Router>
      <Provider store = {store}>
        <Header />

        <Body />

      </Provider>
    </Router>
  );
}

export default App
