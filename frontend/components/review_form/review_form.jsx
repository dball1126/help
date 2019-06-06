import React from 'react';
import {Link} from 'react-router-dom';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state)
    }

    update(e){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        return (
            <div>
                <p>{state.content}</p>
            </div>
        )
    }
}

export default ReviewForm;