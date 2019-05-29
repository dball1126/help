import React from 'react';
import {withRouter} from 'react-router-dom';

class sessionForm extends React.Component {
    constructor(props){
        super(props);
        if (this.props.formType === 'signup'){
            this.state = {email: "", password: "", first_name: "",
                          last_name: "", zip_code: 0};
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
                ""
            )
        } else {
            return (
                <div>
                    <label id="first_name">First Name:
                            <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')} />
                    </label>
                    <label id="last_name">Last Name:
                            <input type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')} />
                    </label>
                    <label id="zip_code">Zip Code:
                            <input type="text"
                            value={this.state.zip_code}
                            onChange={this.update('zip_code')} />
                    </label>
                </div>
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
                    <label id="email">Email:
                        <input type="text"
                               value={this.state.email}
                               onChange={this.update('email')}/>
                    </label>
                    {this.renderOtherData()}
                    <label id="password">Password:
                        <input type="password"
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