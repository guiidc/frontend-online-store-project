import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingKart from './pages/ShoppingKart';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: '',
      cartItems: [],
      totalPrice: 0,
    };
  }

  getProductData = (product) => {
    this.setState({ productData: product });
  };

  sumTotalPrice = (arrayProducts) => {
    if (!arrayProducts.length) return this.setState({ totalPrice: 0 });

    let summed = arrayProducts.map(({ actualAmount, price }) => actualAmount * price, 0)
      .reduce((acc, value) => acc + value);
    summed = parseFloat(summed.toFixed(2));
    this.setState({ totalPrice: summed });
  }

  addItemsToCart = (product) => {
    const { cartItems } = this.state;
    const itemAmount = cartItems.filter(({ id }) => id === product.id).length;

    if (!itemAmount) {
      product.actualAmount = 1;
      this.setState({ cartItems: [...cartItems, product] });
      this.sumTotalPrice([...cartItems, product]);
      return;
    }

    cartItems.forEach((item, index) => {
      if (item.id === product.id) {
        const deepCopy = [...cartItems];
        deepCopy[index].actualAmount += 1;
        this.setState({ cartItems: deepCopy });
        this.sumTotalPrice(deepCopy);
      }
    });
  };

  handleAmount = (operation, index) => {
    const { cartItems } = this.state;
    const deepCopy = [...cartItems];

    if (operation === 'increase') {
      deepCopy[index].actualAmount += 1;
      this.setState({ cartItems: deepCopy });
      this.sumTotalPrice(deepCopy);
      return;
    }

    if (deepCopy[index].actualAmount > 1) {
      deepCopy[index].actualAmount -= 1;
      this.setState({ cartItems: deepCopy });
      this.sumTotalPrice(deepCopy);
    }
  }

  removeProduct = (index) => {
    const { cartItems } = this.state;
    const deepCopy = [...cartItems];
    deepCopy.splice(index, 1);
    this.setState({ cartItems: deepCopy });
    this.sumTotalPrice(deepCopy);
  }

  render() {
    const { productData, cartItems, totalPrice } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                getProductData={ this.getProductData }
                addItemsToCart={ this.addItemsToCart }
              />
            ) }
          />
          <Route
            exact
            path="/shoppingKart"
            render={ () => (<ShoppingKart
              cartItems={ cartItems }
              totalPrice={ totalPrice }
              removeProduct={ this.removeProduct }
              handleAmount={ this.handleAmount }
            />) }
          />
          <Route
            exact
            path="/product/:id"
            render={ () => (
              <ProductDetails
                productData={ productData }
                getProductData={ this.getProductData }
                addItemsToCart={ this.addItemsToCart }
              />
            ) }
          />
          <Route
            exact
            path="/checkout"
            render={ () => <Checkout cartItems={ cartItems } /> }
          />
          {/* <Route component={ NotFound } /> */}
        </Switch>
      </Router>
    );
  }
}
