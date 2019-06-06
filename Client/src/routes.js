import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import Menu from './components/Menu/Menu';
import Students from './components/Students/Students';
import Grades from './components/Grades/Grades';
import Create from './components/Create/Create';

export default (
    <Route name="app" component={App}>
        <Link path="/" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/menu" component={Menu} />
        <Link path="/Students" component={Students} />
        <Route path="/Grades" component={Grades} />
        <Route path="/Create" component={Create} />
    </Route>
);