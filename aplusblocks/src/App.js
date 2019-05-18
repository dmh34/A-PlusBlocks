import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import test from "./Util/xlsxparse";
import API from "./Util/API";
import Auth from './auth/auth';


function handlefile(e) {
  console.log(e.target.files);
  test(e.target.files[0], API);

}



const auth2 = new Auth();
function handleClick() {
  API.getStudents().then(data => {
    console.log(data.data);
  })
}


class App extends Component {

  login() {
    auth2.login();
  }

  logout() {
    auth2.logout();
  }

  render() {

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <div onClick={this.login}>login</div>
            <div onClick={this.logout}>log out</div>

            <div>
              <input type="file" onChange={handlefile}></input>
              <button onClick={handleClick}>Click here to get students</button>
            </div>
          </header>
        </div>

      </div>
    );

  }
}





export default App;
