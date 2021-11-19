import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { searchText, handleChange, handleSearchButton } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={ searchText }
          onChange={ handleChange }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ handleSearchButton }
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = ({
  searchText: PropTypes.string,
  handleChange: PropTypes.func,
  handleSearchButton: PropTypes.func,
}).isRequired;
