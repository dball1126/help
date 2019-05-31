import React from 'react';
import {withRouter} from 'react-router-dom';

class sessionForm extends React.Component {
    constructor(props){
        super(props);
        
        if (this.props.formType === 'Sign Up'){
            this.state = {email: "", password: "", first_name: "",
                          last_name: "", zip_code: ""};
        } else {

        
        this.state = {email: "", password: ""}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processingForm(this.state);
    };

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    };


    render(){
        
        const getNames = () => {
            if (this.props.formType === 'Sign Up') {
                return (
                    <div className="first_and_last">
                        <label className="names">
                            <input type="text"
                                placeholder='First Name'
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                                className="names" />
                        </label>
                        <label className="names">
                            <input type="text"
                                placeholder='Last Name'
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                                className="names" />
                        </label>
                    </div>
                )
            } else {
                return (
                    ""
                )
            }
        }

        const getZip = () => {
            if (this.props.formType === 'Sign Up') {
                return (
                    
                        <label className="zipcode">
                            <input type="text"
                                placeholder='Zip Code'
                                value={this.state.zip_code}
                                onChange={this.update('zip_code')}
                                className="zipcode" />
                        </label>
                    
                )
            }
        }

         const errors = this.props.errors.map(error => {
             return (
                    <li>
                        <h1>{error}</h1>
                    </li>
             ) 
         })
         
         

        return (
            <div>
                 <div className="login-signup-header">
                    <div className="main-header-container">
                        <a href="https://help10.herokuapp.com/#/" className="main-header-link">
                            <span className="main-header-image">
                                <img src="/assets/suitcase.png" width="18" height="18"></img>
                            </span>
                            <span className="main-header-slogan">
                                Go to Help for Business Owners
                            </span>
                        </a>
                    </div>
                </div>
                <div className="processingForm-header">
                    <div className="login-signup-help-logo">
                        <img src="/assets/help-logo.png" width="60" height="60"></img>
                    </div>
                </div>


            <div className="login-signup-container">
                <div className="login-signup-layout">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-legal-data">
                        <h3 className="login-legal-header">Sign Up for Help</h3>
                        <div className="login-legal-saying">Connect with great local businesses</div>
                        <div className="login-legal-terms">By Continuing, you agree to view Help's reviews, pictures and content</div>
                    </div>

                    <ul>{errors}</ul>
                    
                    {getNames()}
                        
                        <label className="email">
                        <input type="text"
                               placeholder='Email'
                               value={this.state.email}
                               onChange={this.update('email')}
                                    className="email-password"/>
                    </label>
                        
                        <label className="password">
                        <input type="password"
                               placeholder='Password'
                               value={this.state.password}
                               onChange={this.update('password')}
                               className="email-password"/>
                        </label>
                      
                    {getZip()}
                    <input type="submit" value={this.props.formType}/>
                </form>
                <div className="login-form-photo">
                    <img src="/assets/picture.png" width="300" height="300"></img>
                </div>
                </div>
            </div>
        </div>
        )
    }
}


export default withRouter(sessionForm);