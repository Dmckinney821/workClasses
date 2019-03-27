import React, { Component } from 'react';

import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {
  state = {
    user: 'DD'
  }

  userChanger = (event) => {
    this.setState({user: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput caChange={this.userChanger}
        currentName={this.state.user}/>
        <UserOutput user={this.state.user}/>
        <UserOutput user={this.state.user}/>
        <UserOutput user={this.state.user}/>
      </div>
    );
  }
}

export default App;
