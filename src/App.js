import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const MAXPOINTS = 210;
const MAXATRR = 90;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      hasTrunfo: false,
    };
  }

  inputHandler = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      this.readyToSubmit,
    );
  };

  checkTrunfo = () => {
    const { savedCards } = this.state;
    this.setState({
      hasTrunfo: savedCards.some((card) => card.cardTrunfo),
    });
  };

  readyToSubmit = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const a1 = parseInt(cardAttr1, 10);
    const a2 = parseInt(cardAttr2, 10);
    const a3 = parseInt(cardAttr3, 10);

    if (
      !cardName
      || !cardDescription
      || !cardImage
      || !cardRare
      || a1 + a2 + a3 > MAXPOINTS
      || a1 < 0
      || a1 > MAXATRR
      || a2 < 0
      || a2 > MAXATRR
      || a3 < 0
      || a3 > MAXATRR
    ) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  };

  buttonHandler = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState(
      (prevState) => ({
        savedCards: [...prevState.savedCards, newCard],
      }),
      () => {
        this.checkTrunfo();
        this.clearForm();
      },
    );
  };

  clearForm = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  removeCard = (event) => {
    const { savedCards } = this.state;
    const cardToRemove = event.target.previousSibling.firstChild.textContent;
    this.setState(
      {
        savedCards: savedCards.filter((card) => card.cardName !== cardToRemove),
      },
      this.checkTrunfo,
    );
  };

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
      isSaveButtonDisabled,
      hasTrunfo,
      savedCards,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.inputHandler }
          onSaveButtonClick={ this.buttonHandler }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {savedCards.map((card) => (
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
              onClick={ this.removeCard }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
