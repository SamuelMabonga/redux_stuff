import React from 'react';
import './App.css';

// import provider
import { Provider } from 'react-redux'

import Movies from './components/Movies'

import store from './store'


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Movies />
      </div>
    </Provider>
  );
}

export default App;
