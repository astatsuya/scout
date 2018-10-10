import React from 'react';

const PreviousResult = (props) => {

  let AmountHappening =  props.savedHappening.length;
  let AmountExcellent = 0;
  let AmountGood = 0;
  let AmountBad = 0;
  let AmountPoor = 0;

  for (let i = 0; i < AmountHappening; i ++) {
    if (props.savedHappening[i] === 'excellent') {
      AmountExcellent ++;
    } else if (props.savedHappening[i] === 'good') {
      AmountGood ++;
    } else if (props.savedHappening[i] === 'bad') {
      AmountBad ++;
    } else if (props.savedHappening[i] === 'poor') {
      AmountPoor ++;
    }
  }

  const percentExcellent = `${(AmountExcellent / AmountHappening * 100).toFixed(2)}%`;
  const percentGood = `${(AmountGood / AmountHappening * 100).toFixed(2)}%`;
  const percentBad = `${(AmountBad / AmountHappening * 100).toFixed(2)}%`;
  const percentPoor = `${(AmountPoor / AmountHappening * 100).toFixed(2)}%`;



  return(
    <div>
      <ul>
        <li>Excellent: {AmountExcellent}回 {percentExcellent}</li>
        <li>Good: {AmountGood}回 {percentGood}</li>
        <li>Bad: {AmountBad}回 {percentBad}</li>
        <li>Poor: {AmountPoor}回 {percentPoor}</li>
        <li>Total: {AmountHappening}回</li>
      </ul>
    </div>
  )
}

export default PreviousResult;