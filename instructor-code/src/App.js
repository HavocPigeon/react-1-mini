import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      picture: '',
      name: 'Tyler',
      friends: []
    };
  }

  changeName(name) {
    this.setState({
      name: name,
    })
  }
  
  render() {
    return (
      <div>
        Name: <input value={this.state.name} onChange={(event) => this.changeName(event.target.value)} />
      </div>
    );
  }
}

export default App;
