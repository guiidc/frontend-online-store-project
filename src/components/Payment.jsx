import React, { Component } from 'react';

export default class Payment extends Component {
  render() {
    return (
      <div>
        <span>FORMA DE PAGAMENTO</span>
        <label htmlFor="boleto">
          Boleto
          <input type="radio" data-testid="boleto" />
        </label>
        <label htmlFor="cc">
          Cartão de Crédito
          <input type="radio" data-testid="cc" />
        </label>
      </div>
    );
  }
}
