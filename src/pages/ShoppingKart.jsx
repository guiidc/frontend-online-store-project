import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ShoppingKart extends Component {
  renderCartProducts = () => {
    const { cartItems, removeProduct, handleAmount } = this.props;

    return cartItems.map(({ id, title, thumbnail, price, actualAmount }, index) => (
      <div key={ id }>
        <button type="button" onClick={ () => removeProduct(index) }>X</button>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <img
          src={ thumbnail }
          alt={ title }
          style={ { width: '150px' } }
        />
        <p>{(price * actualAmount).toFixed(2)}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          name="increase"
          onClick={ () => handleAmount('increase', index) }
        >
          +
        </button>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {actualAmount}
          <button
            data-testid="product-decrease-quantity"
            type="button"
            name="decrease"
            onClick={ () => handleAmount('decrease', index) }
          >
            -
          </button>
        </p>
        <Link data-testid="checkout-products" to="/checkout">Checkout</Link>
      </div>
    ));
  };

  render() {
    const emptyCartMessage = (
      <span data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </span>
    );

    const { totalPrice, cartItems } = this.props;
    return (
      <div>
        {cartItems.length ? this.renderCartProducts(cartItems) : emptyCartMessage}
        <p>{ totalPrice }</p>
        <Link to="/">Finalizar compra</Link>
      </div>
    );
  }
}

ShoppingKart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
