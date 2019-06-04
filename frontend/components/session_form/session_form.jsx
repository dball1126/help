import React from 'react';
import {withRouter} from 'react-router-dom';
import RedBanner from '../greeting/top_banner_red';
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

    componentWillUnmount(){
        this.props.clearErrors();
    }


    render(){

        const getNames = () => {
            if (this.props.formType === 'Sign Up') {
                return (
                    <div className="first_and_last">
                        <div className="first-name-div">
                        <label className="names">
                            <input type="text"
                                placeholder='First Name'
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                                className="first-name" />
                        </label>
                        </div>
                        <div className="last-name-div">
                        <label className="names">
                            <input type="text"
                                placeholder='Last Name'
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                                className="last-name" />
                        </label>
                        </div>
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
                    <div className="main-zipcode-div">
                        <label className="main-zipcode">
                            <input type="text"
                                placeholder='ZIP Code'
                                value={this.state.zip_code}
                                onChange={this.update('zip_code')}
                                className="zipcode" />
                        </label>
                    </div>
                )
            }
        }

         const errors = () => {
             
             if (this.props.errors.length > 0) {
                return (
                    <div className="login-signup-errors-container">
                        <ul className="ul-login-signup-errors">
                            {this.props.errors.map((error, i) => {
                                return (
                                <li key={i}>{error}</li>
                                )
                            })}
                        </ul>
                        <button onClick={() => this.props.clearErrors()} className="errors-button">x</button>
                    </div>
                )      
             }
             return "";
        }
         
         

        return (
            <div>
                 <RedBanner />
                <div className="processingForm-header">
                    <div className="login-signup-help-logo">
                        
                    </div>
                </div>


            <div className="login-signup-container">
                    {errors()}
                <div className="login-signup-layout">
                        
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-legal-data">
                        <h3 className="login-legal-header">Sign Up for Yap</h3>
                        <div className="login-legal-saying">Connect with great local businesses</div>
                        <div className="login-legal-terms">By continuing, you agree to view Yap's reviews, pictures and content.</div>
                    </div>
                    
                    {getNames()}
                        <div className="email-password-div">
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
                        </div>
                    {getZip()}
                    <input type="submit" value={this.props.formType}/>
                </form>
                <div className="login-form-photo">
                    <div className="login-photo"></div>
                </div>
                </div>
            </div>
        </div>
        )
    }
}


export default withRouter(sessionForm);