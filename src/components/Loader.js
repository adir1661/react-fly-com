import React ,{Component} from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";

class Loader extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={'loader-container'}>
                <div style={{width:'100%'}}>
                    <ProgressBar  animated now={100}  variant="warning" />
                </div>
                <img className="logo-text-loader" src="/assets/img/logo/logo-14.png" alt=""/>
                <img className="logo-icon-loader" src="/assets/img/logo/logo-13.png" alt=""/>

            </div>
              )
    }
}

export default Loader;