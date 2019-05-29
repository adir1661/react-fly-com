import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './components/ourSearch';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, browserHistory, Link, Switch} from 'react-router-dom';
import './external/circular-css.css';
import './external/lightbox.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './external/bootstrap.css'
import './external/bootstrap-slider.min.css';
import './external/zabuto_calendar.min.css';
import './external/owl.carousel.css';
import './external/bootstrap-select.min.css';
import './external/fileinput.min.css';
import './external/trackpad-scroll-emulator.css';
import './external/jquery.nouislider.min.css';
import './external/style.css';

// import 'jquery/dist/jquery.min'
// import 'bootstrap/dist/js/bootstrap.min'
ReactDOM.render(
    <App/>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
