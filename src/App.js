import React, {Component, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Libraries ,{afterLoad} from './external/js-list';

import './App.css';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./components/Home";
import {withTranslation} from "react-i18next";
import Register from "./components/Register";
import Modal from "react-bootstrap/Modal";
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
        this.isScriptsLoaded = false;
        this.state = {
            registerModalOpen:false,
            signinModalOpen:false
        }
    }

    componentDidMount = ()=> {
        insertScript(Libraries, 0, this.scriptLoaded);
    };

    scriptLoaded = () => {
        this.isScriptsLoaded=true;
        document.dispatchEvent(new window.Event('initializeScripts'));
        insertScript(afterLoad,0,()=>{
            document.dispatchEvent(new window.Event('initializeAllScripts'));
        });
    };

    render() {
        console.log('APP RENDER');
        let {registerModalOpen} = this.state;
        return (
            <Router>
            <div className="App">
                <div className="page-wrapper">
                    <header  id="page-header">
                        <Navbar onSignIn = {()=>{this.setState({signinModalOpen:true,registerModalOpen:false})}}
                                onRegister={()=>{this.setState({registerModalOpen:true,signinModalOpen:false})}}/>
                    </header>
                    <Switch>
                        <Route path="/" exact component={(props)=>(<Home {...props} t ={this.props.t}/>)}/>
                        <Route path="/search" render={(props) => (<Search {...props} isMainScritsLoaded={this.isScriptsLoaded}/>)}/>
                    </Switch>
                </div>
                <a href="#" className="to-top scroll" data-show-after-scroll="600"><i className="arrow_up"/></a>
                <Modal show={registerModalOpen} onHide={()=>{this.setState({registerModalOpen:false})}}>
                    <Register />
                </Modal>
            </div>
            </Router>
        );
    }
}
let AppTranslated = withTranslation()(App);

export default AppTranslated;
