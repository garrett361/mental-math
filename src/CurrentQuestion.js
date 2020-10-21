import React, { Component } from 'react'

// Ramda
import * as R from 'ramda';

// Latex
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';



let initialState = {
    guess: null,
};

class CurrentQuestion extends Component {

    state = initialState;


    handleChange = event => {
        let { name, value } = event.target
        // The [ ] brackets here are the setState synatx
        this.setState({
            [name]: value,
        })
    };

    questionType = (randInt1, randInt2, qtype) => {

        // Multiplication
        if (qtype == 0) {
            let factorMax = 100; // Max possible mult. factor
            let randFactor1 = Math.floor((randInt1 * factorMax) + 1);
            let randFactor2 = Math.floor((randInt2 * factorMax) + 1);
            let answer = randFactor1 * randFactor2;
            let latex = <InlineMath>
                {randFactor1 + ' \\times ' + randFactor2}
            </InlineMath>;
            return (
                [answer, latex]
            );
        };


        // Division
        if (qtype == 1) {
            let numMax = 100; // Max possible numerato. factor
            let denomMax = 10; // Max possible denominator factor
            let randFactor1 = Math.floor((randInt1 * numMax) + 1);
            let randFactor2 = Math.floor((randInt2 * denomMax) + 1);
            let answer = Math.round(randFactor1 / randFactor2);
            let latex = <InlineMath>
                {'\\frac{' + randFactor1 + '}{ ' + randFactor2 + '}'}
            </InlineMath>;
            return (
                [answer, latex]
            );
        };


        // Addition
        if (qtype == 2) {
            let numMax1 = 1000; // Max possible factor 1
            let numMax2 = 1000; // Max possible factor 2
            let randFactor1 = Math.floor(randInt1 * numMax1);
            let randFactor2 = Math.floor(randInt2 * numMax2);
            let answer = Math.round(randFactor1 + randFactor2);
            let latex = <InlineMath>
                {randFactor1 + ' + ' + randFactor2}
            </InlineMath>;
            return (
                [answer, latex]
            );
        };


        // Subtraction
        if (qtype == 3) {
            let numMax1 = 1000; // Max possible factor 1
            let numMax2 = 1000; // Max possible factor 2
            let randFactor1 = Math.floor(randInt1 * numMax1);
            let randFactor2 = Math.floor(randInt2 * numMax2);
            let answer = Math.round(randFactor1 - randFactor2);
            let latex = <InlineMath>
                {randFactor1 + ' - ' + randFactor2}
            </InlineMath>;
            return (
                [answer, latex]
            );
        };

        // Percentages
        if (qtype == 4) {
            let percentFactor = Math.round((randInt1 * 19) + 1) * 5;
            let numMax = 100; // Max possible factor 2
            let randFactor = Math.floor(randInt2 * numMax);
            let answer = Math.round((percentFactor / 100) * randFactor);
            let latex = <InlineMath>
                {percentFactor + ' \\% \\ \\mathrm{of} \\ ' + randFactor}
            </InlineMath>;
            return (
                [answer, latex]
            );
        };



    };


    handleGuess = (e) => {
        e.preventDefault();
        let { handleSubmit, currentQuestionType, randInt1, randInt2 } = this.props;
        let { guess } = this.state;
        if (guess) {
            handleSubmit(
                this.state.guess,
                this.questionType(randInt1, randInt2, currentQuestionType)[0],
                this.questionType(randInt1, randInt2, currentQuestionType)[1],
            );
            this.setState(initialState);
        }
        else {
            alert('Please enter a number');
            this.setState(initialState);
        }
    }

    render() {

        let { guess } = this.state;
        let { currentQuestionType, randInt1, randInt2 } = this.props;


        return (

            <div>

                <h4>
                    {this.questionType(randInt1, randInt2, currentQuestionType)[1]}
                </h4>

                <form onSubmit={this.handleGuess}>

                    <label>Guess</label>
                    <input
                        type="number"
                        name="guess"
                        id="guess"
                        value={guess || ''}
                        onChange={this.handleChange}   //Make enter key same action as submit button
                        autoFocus />
                    <button type="submit">Submit</button>

                </form>




            </div>
        );
    };

}


export default CurrentQuestion