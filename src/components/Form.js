import React from 'react';

const Form = (props) => {
  return(
    <div>
        <button
          type="submit"
          name="excellent"
          value="excellent"
          onClick={props.handleSubmit}
        >excellent</button>

        <button
          type="submit"
          name="good"
          value="good"
          onClick={props.handleSubmit}
        >good</button>

        <button
          type="submit"
          name="bad"
          value="bad"
          onClick={props.handleSubmit}
        >bad</button>

        <button
          type="submit"
          name="poor"
          value="poor"
          onClick={props.handleSubmit}
        >poor</button>

    </div>
  )
}

export default Form;
