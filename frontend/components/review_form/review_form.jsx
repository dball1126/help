import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.review || {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onMouseChange
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.setState({...this.props.review});
        debugger
    }

    handleSubmit(e){
        e.preventDefault();

        const vals = {
            content: this.state.content,
            author_id: this.props.currentUser.id,
            rating: parseInt(this.state.rating),
            business_id: this.props.match.params.businessId
        }
        
        this.props.action(vals).then(() => this.props.history.push(`/businesses/${this.props.match.params.businessId}`));
    }

    update(field){
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
                    <div className="review-main-container">
                        <div className="review-container">
                            <div className="left-review-container">
                                <div className="business-review-header">
                                    <div className="review-business-name">
                                        <span>Business Name</span>
                                    </div>
                                    <div className="guidelines">
                                        <a href="">Read our review guidelines</a>
                                    </div>
                                </div>

                                <div className="review-form-container">
                                    <form onSubmit={this.handleSubmit} >
                                    <div className="review-form">
                                        <div className="rating-data">
                                            
                                                <ul className="ul-field-rating">
                                                    <li className="star-box">
                                                        <input type="radio" id="rating-1" className="fa fa-star" value="1" />
                                                    </li >
                                                    <li className="star-box">
                                                        <input type="radio" id="rating-2" className="fa fa-star" value="2"/>
                                                    </li>
                                                    <li className="star-box">
                                                        <input type="radio" id="rating-3" className="fa fa-star" value="3"/>
                                                    </li>
                                                    <li className="star-box">
                                                        <input type="radio" id="rating-4" className="fa fa-star" value="4"/>
                                                    </li>
                                                    <li className="star-box">
                                                        <input type="radio" id="rating-5" className="fa fa-star" value="5" onChange={this.update('rating')}/>
                                                    </li>
                                                    <span className="rating select"> Select your rating</span>
                                                </ul>
                                            
                                        </div>
                                        <textarea className="content-data" 
                                                  onChange={this.update('content')}
                                                  placeholder="Your review helps other learn about great local businesses"/>
                                    </div>
                                        <div className="review-button-box">
                                            <div className="review-buttin-inner">
                                                <button className="actual-review-button">
                                                    <span className="post-review">Post Review</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        )
    }
}

export default withRouter(ReviewForm);