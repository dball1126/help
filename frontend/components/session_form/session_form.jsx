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

    renderErrorMessages(){
        return (
            <ul>
            {this.props.errors.map((error, index) => {
                <li key={index}>
                    {error}
                </li>
            })}
            </ul>
        );
    }

    renderOtherData(){
        if (this.props.formType === 'signup'){
            return (
                <div>
                    <label id="first_name">
                            <input type="text"
                            placeholder = 'First Name'
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

    render(){


        return (
            <div className="processingForm">
                <h1>Welcome to Help</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    <h3>{this.props.formType} or {this.props.navLink}</h3>
                    {this.renderErrorMessages()}
                    <label id="email">
                        <input type="text"
                               placeholder='Email'
                               value={this.state.email}
                               onChange={this.update('email')}/>
                    </label>
                    {this.renderOtherData()}
                    <label id="password">
                        <input type="password"
                               placeholder='Password'
                               value={this.state.password}
                               onChange={this.update('password')}/>
                    </label>

                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}


export default withRouter(sessionForm);