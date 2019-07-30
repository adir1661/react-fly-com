import React, {Component, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Libraries ,{afterLoad} from './external/external';

import './App.css';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./components/Home";
import {withTranslation} from "react-i18next";
let insertScript = function (srcs, i, cb) {
    let script;
    script = document.createElement("script");
    script.src = srcs[i];
    document.body.appendChild(script);
    script.onload = () => {
        if (i < srcs.length - 1) {
            insertScript(srcs, i + 1, cb)
        }
        else {
            cb();
        }
    };
};
class App extends Component {
    isScriptsLoaded;
    constructor(props){
        super(props);
        this.scriptsLoaded = new window.Event('initializeScripts');
        this.isScriptsLoaded = false;
    }

    componentDidMount = ()=> {
        insertScript(Libraries, 0, this.scriptLoaded);
    };

    scriptLoaded = () => {
        this.isScriptsLoaded=true;
        document.dispatchEvent(this.scriptsLoaded);
        insertScript(afterLoad,0,()=>{
            document.dispatchEvent(new window.Event('initializeAllScripts'));
        });
    };

    render() {
        console.log('APP RENDER');
        return (

            <Router>
            <div className="App">
                <div className="page-wrapper">
                    <header  id="page-header">
                        <Navbar/>
                    </header>
                        <Switch>
                            <Route path="/" exact component={(props)=>(<Home {...props} t ={this.props.t}/>)}/>
                            <Route path="/search" render={(props) => (<Search {...props} isMainScritsLoaded={this.isScriptsLoaded}/>)}/>
                        </Switch>
                </div>
                <a href="#" className="to-top scroll" data-show-after-scroll="600"><i className="arrow_up"/></a>

            </div>
            </Router>
        );
    }
}
let AppTranslated = withTranslation()(App);

export default AppTranslated;
