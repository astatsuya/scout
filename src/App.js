import React, { Component } from 'react';
import logo from './logo.svg';
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


  }

  render() {
    return (
      <div className="App">
        <Form />
        <Result
          name={this.state.name}
          happening={this.state.happening}
        />
      </div>
    );
  }
}

export default App;
