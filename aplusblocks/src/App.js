import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import Menu from './components/Menu/Menu';
import Students from './components/Students/Students';
import Grades from './components/Grades/Grades';
import Create from './components/Create/Create';


import { Route } from 'react-router-dom';

class App extends Component {

    render() {
        return (
          <div className="App">
            <Header />
              <Route exact={true} path="/" component={Home} />
              <Route path="/faq" component={Faq} />
              <Route path="/menu" component={Menu} />    
              <Route path="/Students" component={Students} /> 
              <Route path="/Grades" component={Grades} /> 
              <Route path="/Create" component={Create} />  
            <Footer />
          </div>
        )
    }
  };
/*
import test from "./Util/xlsxparse";
import API from "./Util/API";
let a;
function handlefile(e) {
  console.log(e.target.files);
  test(e.target.files[0], API);
  console.log("val returned" + a);
}

function handleClick(){
  API.getStudents().then(data =>{
    console.log(data.data);
  })
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="file" onChange={handlefile}></input>
          <button onClick={handleClick}>Click here to get students</button>
        </div>
      </header>

    </div>

  );
}
*/

export default App;
