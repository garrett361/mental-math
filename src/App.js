import React, { Component } from 'react'


// Components
import History from './History';
import CurrentQuestion from './CurrentQuestion';



let initialState = {
  previousLatex: [],
  previousAnswers: [],
  previousGuesses: [],
  currentQuestionType: 0, // Index for question type (multiplicaton, division etc.)
  randInt1: Math.random(), // Random integer between 0 and 1
  randInt2: Math.random(), // Random integer between 0 and 1
};

class App extends Component {

  state = initialState;

  questionTypes = 5; //Number of different types of questions; see CurrentQuestions

  // Code for handling the submit button and appending new data to input list

  handleSubmit = (guesslist, answerlist, latex) => {
    this.setState({ previousGuesses: [...this.state.previousGuesses, guesslist] });
    this.setState({ previousAnswers: [...this.state.previousAnswers, answerlist] });
    this.setState({ previousLatex: [...this.state.previousLatex, latex] });
    this.setState({ currentQuestionType: Math.floor(Math.random() * this.questionTypes) });
    this.setState({ randInt1: Math.random() });
    this.setState({ randInt2: Math.random() });
  };

  handleReset = () => {
    this.setState(initialState);
  };

  render() {

    let { input, outputUnit, GNis1 } = this.state;
    return (


      <div className="container">
        <h1>
          Mental Math
      </h1>

        <p>
          Simple mental math practice.
      </p>

        <h2>
          Current Question
        </h2>
        <CurrentQuestion
          handleSubmit={this.handleSubmit}
          currentQuestionType={this.state.currentQuestionType}
          randInt1={this.state.randInt1}
          randInt2={this.state.randInt2} />

        <h3>
          History
      </h3>

        <History
          previousLatex={this.state.previousLatex}
          previousAnswers={this.state.previousAnswers}
          previousGuesses={this.state.previousGuesses}
        />

        <input
          type="button"
          value="Reset"
          onClick={() => {
            this.handleReset();
          }
          }
        />

        <input
          type="button"
          value="State"
          onClick={() => {
            { console.log(this.state) };
          }
          }
        />


      </div>
    )
  }

}




export default App;
