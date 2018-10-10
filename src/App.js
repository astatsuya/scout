import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Result from './components/Result'
import PartOfResult from './components/PartOfResult'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "name",
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
          name={this.state.name}
          happening={this.state.happening}
        />
        <PartOfResult happening={this.state.happening} resetCurrentHappening={this.resetCurrentHappening} />
      </div>
    );
  }
}

export default App;
