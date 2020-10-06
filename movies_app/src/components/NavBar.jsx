import React from 'react'
import { Link } from 'react-router-dom'

import Cart from './Cart'

const NavBar = () => {
  return (
    <div className="nav-bar__background">
      <div className="nav-bar">

        <div className="logo">
          <h1 className="logo-title">EDU</h1>
          <p className="logo-body">Movie Library</p>
        </div>

        <div className="nav-wrapper">
          <ul className="nav-list">
            <Link to="/">
              <li className="nav-list__item">Home</li>
            </Link>

            <Link to="/latest">
              <li className="nav-list__item">Trending</li>
            </Link>

            <Link to="/tvshows">
              <li className="nav-list__item">TV Shows</li>
            </Link>
          </ul>     
        </div>

        <Cart />
      </div>
    </div>
  )
}

export default NavBar