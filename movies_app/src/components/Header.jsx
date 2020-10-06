import React, { Component } from 'react'

import NavBar from './NavBar'
import SearchBar from './SearchBar'

const Header = (props) => {
  return (
    <div className="header-image">
      <div className="header-image__layer">
        
        <NavBar />

        <SearchBar />

      </div>
    </div>
  )
}

export default Header