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
        <Link to="/" component={Home} />
        <Link to="/faq" component={Faq} />
        <Link to="/menu" component={Menu} />
        <Link to="/Students" component={Students} />
        <Link to="/Grades" component={Grades} />
        <Link to="/Create" component={Create} />
    </Route>
);