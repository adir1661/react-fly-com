import React ,{Component} from 'react';
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Register from "./Register";
import Modal from "react-bootstrap/Modal";

class NavbarUntraslated extends Component{
    constructor(props){
        super(props);
        this.state = {
            registerModalOpen:false,
        }
    }

    render(){
        let {registerModalOpen} = this.state;
        return(
            <>
            <nav>
                <div className="left">
                    <a href="/" className="brand">
                        <img className="logo-icon" src="/assets/img/logo/logo-13.png" alt=""/>
                        <img className="logo-text" src="/assets/img/logo/logo-14.png" alt=""/>
                    </a>
                </div>

                <div className="right">
                    <div className="primary-nav has-mega-menu">
                        <ul className="navigation">
                            <li className="active has-child"><a href="#">Controls</a>
                                <div className="wrapper">
                                    <div id="nav-homepages" className="nav-wrapper">
                                        <ul>
                                            <li><a href="#" className="add-listing"
                                                   data-modal-external-file="#modalSubmit" data-target="modal-submit">
                                                <i className="fa fa-plus"></i>
                                                <span>Add Site</span>
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
                        <a onClick={()=>{}/*this.props.onSignIn*/}>Sign In</a>
                        <a onClick={()=>{this.setState({registerModalOpen:true})}} className="" >Register</a>
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
                    {/*<ProgressBar animated now={45} />*/}
                </div>
            </nav>
                <Modal show={registerModalOpen} onHide={()=>{this.setState({registerModalOpen:false})}}>
                    <Register />
                </Modal>
        </>
        )
    }
}
let Navbar = withTranslation()(NavbarUntraslated);
export default Navbar;