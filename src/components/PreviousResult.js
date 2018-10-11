import React from 'react';

const PreviousResult = (props) => {
  let lastRecord = props.happening.map((value, index) => {
    return <li key={index}>{index + 1}回目の記録は{value}</li>;
  })

  return(
    <div className="PreviousResult">
      <div className="Previous-ul">
        <ul>
          {lastRecord}
        </ul>
      </div>
    </div>
  )
}

export default PreviousResult;
