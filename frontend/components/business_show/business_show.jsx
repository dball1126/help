import React from 'react';

class BusinessShow extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        
        return (
            <div className="business-show-main-container">
                <ul className="ul-business-info">
                    <li>{this.props.business}</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}



export default BusinessShow;