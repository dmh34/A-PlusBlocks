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
import { BrowserRouter } from 'react-router-dom';


import { Route } from 'react-router-dom';
//load auth from here and pass it as a prop;
class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route exact={true} path="/" component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/menu" component={Menu} />
          <Route path="/Students" component={Students} />
          <Route path="/Grades" component={Grades} />
          <Route path="/Create" component={Create} />
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
};



export default App;
