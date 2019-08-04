import React ,{Component} from 'react';
import Footer from "./Footer";

import MainMap from "./MainMap";
import {SplitButton ,Dropdown} from "react-bootstrap";
import Select from "../react-wrappers/Select";
import MapSearchForm from "./MapSearchForm";
import Register from "./Register";

class Home extends Component{
    constructor(props){
        super(props);

    }
    render(){
        let {t} = this.props;
        console.log('t: ',t);
        return(
            <div id="page-content">
                <div className="hero-section full-screen has-map" data-component="MapWrapperContainer">
                    <div className="map-wrapper" data-component="MapWrapper">
                        <div className="geo-location" style={{top:'60px'}}>
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <MainMap/>
                    </div>
                    <MapSearchForm/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;