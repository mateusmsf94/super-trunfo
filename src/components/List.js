import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };
  }

  handleFilter = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  filterCards = () => {
    const { lista } = this.props;
    const { filterName, filterRare, filterTrunfo } = this.state;

    const filteredCards = filterRare !== 'todas'
      ? lista.filter((card) => card.cardRare === filterRare)
      : lista;
    if (filterTrunfo) return lista.filter((card) => card.cardTrunfo);
    return filteredCards.filter((card) => card.cardName.includes(filterName));
  };

  render() {
    const { removeHandler } = this.props;
    const { filterName, filterRare, filterTrunfo } = this.state;
    return (
      <div>
        <label htmlFor="filterName">
          Nome
          <input
            name="filterName"
            id="filterName"
            type="text"
            data-testid="name-filter"
            value={ filterName }
            onChange={ this.handleFilter }
            disabled={ filterTrunfo }
          />
        </label>
        <label htmlFor="rareFilter">
          Raridade
          <select
            name="filterRare"
            id="filterRare"
            data-testid="rare-filter"
            value={ filterRare }
            onChange={ this.handleFilter }
            disabled={ filterTrunfo }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="filterTrunfo">
          Super Trunfo
          <input
            name="filterTrunfo"
            id="filterTrunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            value={ filterTrunfo }
            onClick={ this.handleFilter }
          />
        </label>

        <section>
          {this.filterCards().map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ removeHandler }
              >
                Excluir
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

List.propTypes = {
  lista: PropTypes.arrayOf.isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default List;
