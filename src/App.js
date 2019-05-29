import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Libraries ,{afterLoad} from './external/external';

import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/ourSearch";
import HomeWithMap from "./components/HomeWithMap";
let insertScript = function (srcs, i, cb) {
    let script;
    script = document.createElement("script");
    script.src = srcs[i];
    //script[i].async = true;
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
        const ourScripts = Libraries;
        insertScript(ourScripts, 0, this.scriptLoaded);
    };

    scriptLoaded = () => {
        this.isScriptsLoaded=true;
        document.dispatchEvent(this.scriptsLoaded);
        let location = {   latitude: 32.1553593733,
            longtitude: 34.825565815};
        var optimizedDatabaseLoading = 0;
        var _latitude = location.latitude;
        var _longitude = location.longtitude;
        var element = "map-homepage";
        var markerTarget = "modal"; // use "sidebar", "infobox" or "modal" - defines the action after click on marker
        var sidebarResultTarget = "sidebar"; // use "sidebar", "modal" or "new_page" - defines the action after click on marker
        var showMarkerLabels = true; // next to every marker will be a bubble with title
        var mapDefaultZoom = 10; // default zoom
        // window.heroMap(_latitude, _longitude, element, markerTarget, sidebarResultTarget, showMarkerLabels, mapDefaultZoom);
        insertScript(afterLoad,0,()=>{
            document.dispatchEvent(new window.Event('initializeAllScripts'));
        });
    };

    render() {
        return (
            <Router>
            <div className="App">
                <div className="page-wrapper">
                    <header  id="page-header">
                        <Navbar/>
                    </header>
                        <Switch>
                            <Route path="/" exact component={(props)=>(<Home {...props}/>)}/>
                            <Route path="/testMap" exact component={(props)=>(<HomeWithMap {...props}/>)}/>
                            <Route path="/search" render={(props) => (<Search {...props} isMainScritsLoaded={this.isScriptsLoaded}/>)}/>
                        </Switch>
                </div>
                <a href="#" className="to-top scroll" data-show-after-scroll="600"><i className="arrow_up"></i></a>

            </div>
            </Router>
        );
    }
}
export default App;
