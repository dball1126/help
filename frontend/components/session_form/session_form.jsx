import React from 'react';
import {withRouter} from 'react-router-dom';

class sessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {username: "", password: ""}
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

    render(){
        return (
            <div className="processingForm">
                <h1>Welcome to Help</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    <h3>{this.props.formType} or {this.props.navLink}</h3>
                    {this.renderErrorMessages()}
                    <label id="username">Username
                        <input type="text"
                               value={this.state.username}
                               onChange={this.update('username')}/>
                    </label>

                    <label id="password">Password
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