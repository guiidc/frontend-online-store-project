import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import RateBox from './RateBox';

class RatingForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      rate: 1,
      comments: undefined,
    };
  }

  handleSubmit = (event) => {
    const { id } = this.props;
    const { comment, rate } = this.state;
    const rating = { id, comment, rate };
    event.preventDefault();
    this.setState({ comments: [rating] });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  }

  render() {
    const { comment, rate, comments } = this.state;
    return (
      <section>

        <form>
          <label htmlFor="rate">
            Nota
            <input
              id="rate"
              type="number"
              max="5"
              min="1"
              value={ rate }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="comment">
            Deixe um comentário:
            <textarea
              value={ comment }
              onChange={ this.handleChange }
              name="comments"
              data-testid="product-detail-evaluation"
              id="comment"
              cols="30"
              rows="10"
            />
          </label>
          <button type="submit" onClick={ this.handleSubmit }>Enviar</button>
          <div>
            <h4>Avaliações:</h4>
          </div>
        </form>
        <p>{comments ? comments.rate : 'nenhum comentario'}</p>
      </section>
    );
  }
}

RatingForms.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RatingForms;
