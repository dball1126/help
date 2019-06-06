import React from 'react';
import {Link} from 'react-router-dom';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {content: "", rating: null}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <div>
                
            </div>
        )
    }
}

export default ReviewForm;