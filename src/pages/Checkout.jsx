import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Payment from '../components/Payment';
import ReviewProduct from '../components/ReviewProduct';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitButton = () => {
    this.setState({
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    });
  };

  render() {
    const { fullname, email, cpf, phone, cep, address } = this.state;
    const { cartItems } = this.props;
    return (
      <div>
        <ReviewProduct cartItems={ cartItems } />
        <form>
          <label htmlFor="checkout-fullname">
            Nome Completo
            <input
              type="text"
              data-testid="checkout-fullname"
              name="fullname"
              value={ fullname }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="checkout-email">
            Email
            <input
              type="email"
              data-testid="checkout-email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="checkout-cpf">
            CPF
            <input
              type="text"
              data-testid="checkout-cpf"
              name="cpf"
              value={ cpf }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="checkout-phone">
            Telefone
            <input
              type="text"
              data-testid="checkout-phone"
              name="phone"
              value={ phone }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="checkout-cep">
            CEP
            <input
              type="text"
              data-testid="checkout-cep"
              name="cep"
              value={ cep }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="checkout-address">
            Endereço
            <input
              type="text"
              data-testid="checkout-address"
              name="address"
              value={ address }
              onChange={ this.handleChange }
              required
            />
          </label>
        </form>
        <Payment />
        <button
          type="submit"
          data-testid="shopping-cart-button"
          onClick={ this.submitButton }
        >
          COMPRAR
        </button>
      </div>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
