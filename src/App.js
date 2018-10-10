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

    this.onClickHandler = this.onClickHandler.bind(this)
    this.sendName = this.sendName.bind(this)
  }

  onClickHandler(addHappening) {
    let newHappening = this.state.happening.concat(addHappening);
    this.setState({
      happening: newHappening
    })
    console.log(this.state.happening)
  }

  sendName(newHappening) {
    let happeningArray = this.state.happening.concat([newHappening.target.value])
    this.setState({
      happening: happeningArray
    })
  }

  render() {
    return (
      <div className="App">
        <Form handleSubmit={this.sendName} />
        <Result
          name={this.state.name}
          happening={this.state.happening}
        />
      </div>
    );
  }
}

export default App;
