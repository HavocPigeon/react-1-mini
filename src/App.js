import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
     picture: '',
     name: '',
     friends: [{
       name: 'My 404 friend',
       picture: 'https://http.cat/404'
     }, {
       name: 'My chill cat with the munchies',
       picture: 'https://http.cat/420'
     }]
         };
  }
  changeName = (event) => {
    this.setState({
      name: event.target.value,
    })
  }
  changePicture = (event) => {
    this.setState({
      picture: event.target.value,
    })
  }

  render() {
    return (
      <div>
        Name: <input value={this.state.name} onChange={(event) =>
        this.changeName(event)} />
        Picture: <input value={this.state.picture} onChange={(event) =>
        this.changePicture(event)} />
        <div>
          {this.state.friends.map(friend => {
            return (
              <div>
              <p><img src={friend.picture} alt={friend.name}/>
              <b>{friend.name}</b></p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
