import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        <Person name='max'age='28'/>
        <Person name='manu'age='29'>My Hobbies</Person>
        <Person name='stephanie'age='30'/>
        </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'))
  }
}

export default App;
