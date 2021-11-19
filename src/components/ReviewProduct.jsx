import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReviewProduct extends Component {
  render() {
    const { cartItems } = this.props;
    return cartItems.map(({ title, price, actualAmount, id }) => (
      <div key={ id }>
        <span>
          {title}
          -
          {price}
        </span>
        <span>
          {actualAmount}
        </span>
        <span>
          TOTAL:
          {actualAmount * price}
        </span>
      </div>
    ));
  }
}

ReviewProduct.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
