import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import spreadsheet from "./Util/xlsxparse";
import API from "./Util/API";
import APIS from "../../Client/src/API/API";
import Auth from './auth/auth';
import { Route } from "react-router-dom";

function handlefile(e) {
  console.log(e.target.files);
  

}

const auth2 = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth2.handleAuth();
  }
}
function handleClick() {

}


class App extends Component {

  constructor() {
    super();
    this.getToke = this.getToke.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  getToke() {
    console.log(APIS.getTeachers());
  }
  login() {


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
            {console.log(document.cookie)}
            <div>
              <input type="file" onChange={handlefile}></input>


              <button onClick={this.getToke}>Click here to get students</button>
              <Route path="/callback" render={(props) => {
                handleAuthentication(props);

              }} />
            </div>
          </header>
        </div>

      </div>
    );

  }
}





export default App;
