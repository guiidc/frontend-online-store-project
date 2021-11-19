import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import ProductsList from '../components/ProductsList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectedCategory: '',
      products: 'noSearchAlready',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ searchText: target.value });
  };

  handleRadioButton = async ({ target }) => {
    // this.setState({ selectedCategory: target.value });
    const data = await getProductsFromCategoryAndQuery(target.value);
    this.setState({ products: data.results });
  };

  handleSearchButton = () => {
    this.setState({ products: 'Carregando...' }, async () => {
      const { selectedCategory, searchText } = this.state;
      const data = await getProductsFromCategoryAndQuery(
        selectedCategory,
        searchText,
      );
      await this.setState({ products: data.results });
    });
  };

  render() {
    const { searchText, products } = this.state;
    const { getProductData, addItemsToCart } = this.props;
    return (
      <div>
        <SearchBar
          handleChange={ this.handleChange }
          searchText={ searchText }
          handleSearchButton={ this.handleSearchButton }
        />
        <Link to="/shoppingKart" data-testid="shopping-cart-button">Carrinho</Link>
        <Category handleRadioButton={ this.handleRadioButton } />
        <ProductsList
          products={ products }
          getProductData={ getProductData }
          addItemsToCart={ addItemsToCart }
        />
      </div>
    );
  }
}

Home.propTypes = {
  getProductData: PropTypes.func,
}.isRequerid;

export default Home;
