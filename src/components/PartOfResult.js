import React from 'react';
import PreviousResult from './PreviousResult'

class PartOfResult extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      savedHappening: []
    }

    this.savedHappeningHandler = this.savedHappeningHandler.bind(this)
  }

  savedHappeningHandler() {
    this.props.resetCurrentHappening();
    this.setState({
      savedHappening: this.props.happening
    })
  }

  render() {
    return(
      <div>
        {this.props.happening}
        <p>
          <button
            type="submit"
            onClick={this.savedHappeningHandler}
          >Save current status</button>
        </p>
        <PreviousResult savedHappening={this.state.savedHappening} />
      </div>
    )
  }

}

export default PartOfResult;
