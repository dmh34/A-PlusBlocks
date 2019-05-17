import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Auth from './auth/auth';

const auth2 = new Auth();


class App extends Component {

  login() {
    auth2.login();
  }

  logout() {
    auth2.logout();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <div onClick={this.login}>login</div>
          <div onClick={this.logout}>log out</div>
        </header>
      </div>
    );
  }
}

export default App;
