import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route,browserHistory,Link,Switch } from 'react-router-dom';
ReactDOM.render(
    <BrowserRouter>
        <Switch>
        <Route path="/" component={App}></Route>
            <Route path="/search" component={App}></Route>
            </Switch>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
