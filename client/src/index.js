import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import './index.css';



ReactDOM.render(

    <BrowserRouter>
        <App />
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();




