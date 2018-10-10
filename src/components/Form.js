import React from 'react';

const Form = (props) => {
  return(
    <div>
        <button
          type="submit"
          value="excellent"
          onClick={props.addHappening}
        >excellent</button>

        <button
          type="submit"
          value="good"
          onClick={props.addHappening}
        >good</button>

        <button
          type="submit"
          value="bad"
          onClick={props.addHappening}
        >bad</button>

        <button
          type="submit"
          value="poor"
          onClick={props.addHappening}
        >poor</button>

    </div>
  )
}

export default Form;
