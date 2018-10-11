import React from 'react';

const Form = (props) => {
  return(
    <div className="Form">
      <button
        type="submit"
        value="excellent"
        onClick={props.addHappening}
      >Excellent</button>

      <button
        type="submit"
        value="good"
        onClick={props.addHappening}
      >Good</button>

      <button
        type="submit"
        value="bad"
        onClick={props.addHappening}
      >Bad</button>

      <button
        type="submit"
        value="poor"
        onClick={props.addHappening}
      >Poor</button>
    </div>
  )
}

export default Form;
