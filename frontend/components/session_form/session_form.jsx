import React from 'react';
import {withRouter} from 'react-router-dom';

class sessionForm extends React.Component {
    constructor(props){
        super(props);
        
        if (this.props.formType === 'signup'){
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
        
        const signupData = () => {
            if (this.props.formType === 'signup') {
                return (
                    <div>
                        <label id="first_name">
                            <input type="text"
                                placeholder='First Name'
                                value={this.state.first_name}
                                onChange={this.update('first_name')} />
                        </label>
                        <label id="last_name">
                            <input type="text"
                                placeholder='Last Name'
                                value={this.state.last_name}
                                onChange={this.update('last_name')} />
                        </label>
                        <label id="zip_code">
                            <input type="text"
                                placeholder='Zip Code'
                                value={this.state.zip_code}
                                onChange={this.update('zip_code')} />
                        </label>
                    </div>
                )
            } else {
                return (
                    ""
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
                    <div className="login-signup-main-logo"></div>
                </div>



            <div className="processingForm">
                <h1>Welcome to Help</h1>
                <form onSubmit={this.handleSubmit} className="login-form-box">
               
                    <ul>{errors}</ul>
                    <h3>{this.props.formType} or {this.props.navLink}</h3>
                    {signupData()}
                    <label id="email">
                        <input type="text"
                               placeholder='Email'
                               value={this.state.email}
                               onChange={this.update('email')}/>
                    </label>
                    
                    <label id="password">
                        <input type="password"
                               placeholder='Password'
                               value={this.state.password}
                               onChange={this.update('password')}/>
                    </label>
                  

                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
            </div>
        )
    }
}


export default withRouter(sessionForm);