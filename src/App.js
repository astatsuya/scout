import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Result from './components/Result'
import PreviousResult from './components/PreviousResult'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      happening: []
    }

    this.addHappening = this.addHappening.bind(this)
    this.resetCurrentHappening = this.resetCurrentHappening.bind(this)
  }


  addHappening(newHappening) {
    let happeningArray = this.state.happening.concat([newHappening.target.value])
    this.setState({
      happening: happeningArray
    })
  }

  resetCurrentHappening () {
    this.setState({
      happening: []
    })
  }

  render() {
    return (
      <div className="App">
        <Form addHappening={this.addHappening} />
        <Result
          happening={this.state.happening}
          resetCurrentHappening={this.resetCurrentHappening}
        />
        <PreviousResult happening={this.state.happening} />
      </div>
    );
  }
}

export default App;
