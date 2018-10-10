import React from 'react';

const Form = (props) => {
  return(
    <div>
        <button
          type="submit"
          name="excellent"
          value="excellent"
          onClick={props.addEvent}
        >excellent</button>

        <button
          type="submit"
          name="good"
          value="good"
          onClick={props.addEvent}
        >good</button>

        <button
          type="submit"
          name="bad"
          value="bad"
          onClick={props.addEvent}
        >bad</button>

        <button
          type="submit"
          name="poor"
          value="poor"
          onClick={props.addEvent}
        >poor</button>

    </div>
  )
}

export default Form;
