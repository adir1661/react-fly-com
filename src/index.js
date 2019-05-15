import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './our-components/ourSearch';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Route,browserHistory ,Link,Switch } from 'react-router-dom';
ReactDOM.render(
    <Router>
        <Switch>
        <Route  path="/" exact component={App}></Route>
            <Route path="/search" component={Search}></Route>
            </Switch>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
