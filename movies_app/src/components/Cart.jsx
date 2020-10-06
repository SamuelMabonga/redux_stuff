import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeFromCart, emptyCart } from '../actions/movieActions'

const Cart = (props) => {
  const [ total, setTotal ] = useState(0)
  const [ price ] = useState(5000)

  useEffect(() => {
    const calculateTotal = () => {
      let provTotal = 0
      props.movies.map(movie => {
        if (movie.selected) {
          const movieTotal = price * movie.quantity
          provTotal += movieTotal
        }

        setTotal(provTotal)

        return null
      })
    }

    calculateTotal()
  }, [ price, props.movies ])

  const removeFromCart = (id) => {
    props.removeFromCart(id)
  }

  const emptyCart = () => {
    props.emptyCart()
  }

  const cartItems = props.movies.map(movie => {
    if (movie.selected) {
      return (
        <div key={movie.id} className="cart-items">
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
            <button className="cart__remove-item" onClick={() => removeFromCart(movie.id)}>Remove</button>
          </div>
        </div>
      )
    }
    return null
  })

  return (
    <div className="cart">
      <div className="cart-icon">
        <p className="cart-icon-text">CART</p>
      </div>
      <div className="cart-wrapper">
        <div className="cart-row">
          <div className="cart-column__header-item">Item</div>
          <div className="cart-column__header-price">Price</div>
          <div className="cart-column__header-quantity">Quantity</div>
          <div className="cart-column__header-remove"></div>
        </div>
        <div className="cart-items__wrapper">
          {cartItems}
        </div>
        <div className="cart-total">
            <strong className="cart__total-title">Total</strong>
            <span className="cart__total-price">UGX {total}</span>
        </div>
        <button className="btn btn-primary btn-purchase" onClick={() => emptyCart()}>Purchase</button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  movies : PropTypes.array.isRequired,
  removeFromCart : PropTypes.func.isRequired,
  emptyCart : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  movies : state.movies.movies
})

export default connect(mapStateToProps, { removeFromCart, emptyCart })(Cart)
