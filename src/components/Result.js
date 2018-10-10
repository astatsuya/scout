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

  const percentExcellent = `${AmountExcellent / AmountHappening * 100}%`;
  const percentGood = `${AmountGood / AmountHappening * 100}%`;
  const percentBad = `${AmountBad / AmountHappening * 100}%`;
  const percentPoor = `${AmountPoor / AmountHappening * 100}%`;


  return(
    <div>
      {AmountHappening}
      <p>{AmountExcellent} {percentExcellent}</p>
      <p>{AmountGood} {percentGood} </p>
      <p>{AmountBad} {percentBad} </p>
      <p>{AmountPoor} {percentPoor} </p>

    </div>
  )
}

export default Result;
