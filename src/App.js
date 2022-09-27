import React from "react";
import Card from "./components/Card";
import Form from "./components/Form";

const MAXPOINTS = 210;
const MAXATRR = 90;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: "",
      cardDescription: "",
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: "",
      cardRare: "",
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  inputHandler = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      this.readyToSubmit
    );
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
      !cardName ||
      !cardDescription ||
      !cardImage ||
      !cardRare ||
      a1 + a2 + a3 > MAXPOINTS ||
      a1 < 0 ||
      a1 > MAXATRR ||
      a2 < 0 ||
      a2 > MAXATRR ||
      a3 < 0 ||
      a3 > MAXATRR

      // cardAttr1 + cardAttr2 + cardAttr3 < 210
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

  buttonHandler = () => {};

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
    } = this.state;
    return (
      <div>
        <Form
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
          isSaveButtonDisabled={isSaveButtonDisabled}
          onInputChange={this.inputHandler}
          onSaveButtonClick={this.buttonHandler}
        />
        <Card
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
        />
      </div>
    );
  }
}

export default App;
