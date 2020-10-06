import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Cart = (props) => {
  const price = 5000
  const cartItems = props.movies.map(movie => {
    if (movie.selected) {
      return (
        <div key={movie.id}>
          <div className="cart__item">
            <p>{movie.title}</p>
          </div>
          <div className="cart__price">
            <p>UGX {price}</p>
          </div>
          <div className="cart__quantity">
            <p>{movie.quantity}</p>
          </div>
          <div>
            <button className="cart__remove-item">Remove</button>
          </div>
        </div>
      )
    }
  })

  return (
    <div className="cart">
      <div className="cart-icon">
        CART
      </div>
      <div className="cart-wrapper">
        <div className="cart-row">
          <div className="cart-column__header-item">Item</div>
          <div className="cart-column__header-price">Price</div>
          <div className="cart-column__header-quantity">Quantity</div>
          <div className="cart-column__header-remove"></div>
        </div>
        <div className="cart-items">
          {cartItems}
        </div>
        <div className="cart-total">
            <strong className="cart__total-title">Total</strong>
            <span className="cart__total-price">UGX 0</span>
        </div>
        <button className="btn btn-primary btn-purchase">Purchase</button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  movies : PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  movies : state.movies.movies
})

export default connect(mapStateToProps)(Cart)
