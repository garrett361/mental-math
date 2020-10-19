import React from 'react'

// Ramda
import * as R from 'ramda';

// Latex
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';



let History = (props) => {

  let { previousLatex, previousAnswers, previousGuesses } = props;

  // Table Header
  let TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Previous Question</th>
          <th>Answer</th>
          <th>Guess</th>
          <th>Error (Abs. Value)</th>
        </tr>
      </thead>
    )
  }

  // Table Fill
  let tableFill = previousLatex.map((x, index) => {

    let percentError = Math.abs(Math.trunc(100 * (previousAnswers[index] - previousGuesses[index]) / (previousAnswers[index])));

    return (
      <tr key={index}>
        <td>{x}</td>
        <td>{previousAnswers[index]}</td>
        <td>{previousGuesses[index]}</td>
        <td>{percentError}%</td>
      </tr>
    )
  })

  // Averaged accuracy
  let errorList = previousAnswers.map((x, index) => {

    let percentError = Math.abs(Math.trunc(100 * (previousAnswers[index] - previousGuesses[index]) / (previousAnswers[index])));

    return (
      percentError
    )
  });

  let averagedError = Math.trunc(R.reduce(R.add, 0, errorList)) / errorList.length;

  return (
    <div>

      <table>
        <TableHeader />
        <tbody>
          {tableFill}
        </tbody>
      </table>

      {!isNaN(averagedError) &&
        <div>
          <h3>Overall Error (Abs. Value)</h3>
          <InlineMath>{averagedError + ' \\% \\ \\mathrm{error} \\ \\mathrm{on} \\ ' + errorList.length + '\\ \\mathrm{question(s)}'}</InlineMath>
        </div>
      }

    </div>

  )

}




export default History