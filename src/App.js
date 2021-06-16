import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import Lifecycle from './lifecycles.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      "showChild": true,
      "text" : ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.setState(state => ({"showChild" : !state.showChild}))}>Toggle Lifecycle</button>
          <button onClick={() => this.setState(
            state => ({"text" : state.text + "_hello"})
          )}>Update Text</button>
          {this.state.showChild ? <Lifecycle text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
