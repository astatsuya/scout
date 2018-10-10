import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Result from './components/Result'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "name",
      happening: ['excellent', 'good', 'bad', 'poor', 'excellent']
    }

    this.addHappening = this.addHappening.bind(this)
  }


  addHappening(newHappening) {
    let happeningArray = this.state.happening.concat([newHappening.target.value])
    this.setState({
      happening: happeningArray
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
      </div>
    );
  }
}

export default App;
