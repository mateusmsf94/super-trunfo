import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSavedButtonDisable,
      handlerOnChange,
      save,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            value={ cardName }
            name="cardName"
            data-testid="name-input"
            type="text"
            onChange={ handlerOnChange }
          />
        </label>
        <br />
        <label htmlFor="descricao">
          Descricao
          <textarea
            id="descricao"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ handlerOnChange }
          />
        </label>
        <br />
        <label htmlFor="numero1">
          Atributo numerico 1
          <input
            id="numero1"
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ handlerOnChange }
          />
        </label>
        <br />
        <label htmlFor="numero2">
          Atributo numerico 2
          <input
            id="numero2"
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ handlerOnChange }
          />
        </label>
        <br />
        <label htmlFor="numero3">
          Atributo numerico 2
          <input
            id="numero3"
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ handlerOnChange }
          />
        </label>
        <br />
        <label htmlFor="image">
          Imagem
          <input
            id="image"
            name="cardImage"
            type="image"
            data-testid="image-input"
            alt="imagem da carta"
            value={ cardImage }
            onChange={ handlerOnChange }
          />
        </label>
        <br />
        <label htmlFor="raridade">
          Raridade
          <select
            id="raridade"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ handlerOnChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo">
          <input
            type="checkbox"
            name="trunfo"
            id="trunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ handlerOnChange }
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSavedButtonDisable }
          onClick={ save }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSavedButtonDisable: PropTypes.bool.isRequired,
  handlerOnChange: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};

export default Form;
