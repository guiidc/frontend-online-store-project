import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RatingForms from '../components/RatingForms';

export default class ProductDetails extends Component {
  render() {
    const { productData: {
      title, id, avaliable_quantity: avaliableQuantity, thumbnail } } = this.props;
    const { productData, addItemsToCart } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h4 data-testid="shopping-cart-product-name">{title}</h4>
        <img
          src={ thumbnail }
          alt={ title }
          style={ { height: '150px' } }
        />
        <RatingForms id={ id } />
        <p data-testid="shopping-cart-product-quantity">{avaliableQuantity}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addItemsToCart(productData) }
        >
          Adicionar ao carrinho
        </button>
        <Link data-testid="shopping-cart-button" to="/shoppingKart">Carrinho</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productData: PropTypes.objectOf(PropTypes.any),
}.isRequired;
