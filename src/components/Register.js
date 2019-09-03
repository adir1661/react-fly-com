import React ,{Component} from 'react';

class Register extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="modal-dialog width-400px" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        {/*<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span*/}
                            {/*aria-hidden="true">&times;</span></button>*/}
                        <div className="section-title">
                            <h2>Register</h2>
                        </div>
                    </div>
                    <div className="modal-body">
                        <form className="form inputs-underline" onSubmit={(ev)=>props.register(ev)}>
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name</label>
                                        <input type="text" className="form-control" name="first_name" id="first_name"
                                               placeholder="First name"/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input type="text" className="form-control" name="last_name" id="last_name"
                                               placeholder="Last name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" id="email"
                                       placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" id="password"
                                       placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input type="password" className="form-control" name="confirm_password"
                                       id="confirm_password" placeholder="Confirm Password"/>
                            </div>
                            <div className="form-group center">
                                <button type="submit" className="btn btn-primary width-100">Register Now</button>
                            </div>
                        </form>
                        <hr/>
                            <p className="center note">By clicking on “Register Now” button you are accepting the Terms & Conditions</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;