import React from 'react';

const Result = (props) => {

  let AmountHappening =  props.happening.length;
  let AmountExcellent = 0;
  let AmountGood = 0;
  let AmountBad = 0;
  let AmountPoor = 0;

  for (let i = 0; i < AmountHappening; i ++) {
    if (props.happening[i] === 'excellent') {
      AmountExcellent ++;
    } else if (props.happening[i] === 'good') {
      AmountGood ++;
    } else if (props.happening[i] === 'bad') {
      AmountBad ++;
    } else if (props.happening[i] === 'poor') {
      AmountPoor ++;
    }
  }

  const percentExcellent = (AmountExcellent / AmountHappening) ? (AmountExcellent / AmountHappening * 100).toFixed(2) : "0.00";
  const percentGood = (AmountGood / AmountHappening) ? (AmountGood / AmountHappening * 100).toFixed(2) : "0.00";
  const percentBad = (AmountBad / AmountHappening) ? (AmountBad / AmountHappening * 100).toFixed(2) : "0.00";
  const percentPoor = (AmountPoor / AmountHappening) ? (AmountPoor / AmountHappening * 100).toFixed(2) : "0.00";

  return(
    <div className="Result">
      <div className="top-part">
        <div className="left-container">
          <ul>
            <li>Excellent:</li>
            <li>Good:</li>
            <li>Bad:</li>
            <li>Poor:</li>
          </ul>
        </div>
        <div className="middle-container">
          <ul>
            <li>{AmountExcellent}回</li>
            <li>{AmountGood}回</li>
            <li>{AmountBad}回</li>
            <li>{AmountPoor}回</li>
          </ul>
        </div>
        <div className="right-container">
          <ul>
            <li>{percentExcellent}%</li>
            <li>{percentGood}%</li>
            <li>{percentBad}%</li>
            <li>{percentPoor}%</li>
          </ul>
        </div>
      </div>
      <div className="bottom-part">
        <p>Total: {AmountHappening}回</p>
        <button onClick={props.resetCurrentHappening}>Reset</button>
      </div>
    </div>
  )
}

export default Result;
