import React from 'react';
import {Link} from 'react-router-dom';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.review || {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.setState({...this.props.review});
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
                <div className="review-banner">
                    <div className="review-banner-container">
                        <div className="reivew-banner-inner-container">
                            <div className="review-logo">

                            </div>
                            <div className="write-a-review-header">
                                <span>Write a Review</span>
                            </div>
                        </div>
                    </div>
                </div>

                <p>PLACE HOLDER REVIEW FORM</p>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default ReviewForm;