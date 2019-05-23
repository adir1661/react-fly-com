import React ,{Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav>
                <div className="left">
                    <a href="index.html" className="brand">
                        <img className="logo-icon" src="/assets/img/logo/logo-13.png" alt=""/>
                        <img className="logo-text" src="/assets/img/logo/logo-14.png" alt=""/>
                    </a>
                </div>

                <div className="right">
                    <div className="primary-nav has-mega-menu">
                        <ul className="navigation">
                            <li className="active has-child"><a href="#nav-homepages">Controls</a>
                                <div className="wrapper">
                                    <div id="nav-homepages" className="nav-wrapper">
                                        <ul>
                                            <li><a href="#" className="add-listing"
                                                   data-modal-external-file="#modalSubmit" data-target="modal-submit">
                                                <i className="fa fa-plus"></i>
                                                <span>Add Antenna</span>
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                            <Link to={`search`}>Search<i style={{marginLeft:'6px'}} className="fa fa-search"></i></Link>

                        </ul>

                    </div>
                    <div className="secondary-nav">
                        <a href="#" data-modal-external-file="modal_sign_in.php"
                           data-target="modal-sign-in">Sign In</a>
                        <a href="#" className="promoted" data-modal-external-file="modal_register.php"
                           data-target="modal-register">Register</a>
                    </div>
                    <div className="third-nav">
                    </div>
                    <a href="#" className="btn btn-primary btn-small btn-rounded icon shadow add-listing"
                       data-modal-external-file="#modalReport" data-target="modal-submit">
                        <i className="fa fa-plus"></i>
                        <span>Add Report</span>
                    </a>
                    <div className="nav-btn">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;