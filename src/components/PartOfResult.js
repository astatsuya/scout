import React from 'react';

class PartOfResult extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      savedHappening: '0'
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
        <p>{this.state.savedHappening}</p>
      </div>
    )
  }

}

export default PartOfResult;
