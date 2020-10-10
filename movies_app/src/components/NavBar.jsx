import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeSearchStatus } from '../actions/movieActions'

import Cart from './Cart'

const NavBar = (props) => {
  const resetSearch = () => {
    props.changeSearchStatus()
  }

  return (
    <div className="nav-bar__background">
      <div className="nav-bar">

        <div className="logo">
          <h1 className="logo-title">EDU</h1>
          <p className="logo-body">Movie Library</p>
        </div>

        <div className="nav-wrapper">
          <ul className="nav-list">
            <NavLink to="/" exact={true}>
              <li className="nav-list__item" onClick={resetSearch}>Home</li>
            </NavLink>

            <NavLink to="/latest">
              <li className="nav-list__item" onClick={resetSearch}>Trending</li>
            </NavLink>

            <NavLink to="/tvshows">
              <li className="nav-list__item" onClick={resetSearch}>TV Shows</li>
            </NavLink>
          </ul>     
        </div>

        <Cart />
      </div>
    </div>
  )
}

NavBar.propTypes = {
  changeSearchStatus : PropTypes.func.isRequired,
  search : PropTypes.bool
}

const mapStateToProps = (state) => ({
  search : state.movies.search
})

export default connect(mapStateToProps, {changeSearchStatus})(NavBar)