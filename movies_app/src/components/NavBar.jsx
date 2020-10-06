import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Cart from './Cart'

const NavBar = () => {
  return (
    <div className="nav-bar__background">
      <div className="nav-bar">

        <div className="logo">
          <h1>EDU</h1>
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

        <button className="user-settings-toggle" aria-label="toggle user settings">
          <span className="hamburger"></span>
        </button>

        <div className="user-settings">
          <ul className="user-settings__list">
            <li className="user-settings__item"><a className="user-settings__link"><img src="" /></a></li>
            <li className="user-settings__item"><a className="user-settings__link user-settings__name">Samuel Mabonga</a></li>
            <li className="user-settings__item"><a className="user-settings__link">Settings</a></li>
            <li className="user-settings__item"><a id="logout" className="user-settings__link">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar