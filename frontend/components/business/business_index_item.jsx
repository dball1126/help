import React from 'react'
import {Link} from 'react-router-dom';
class BusinessIndexItem extends React.Component {
    
    render(){
        
        const business = this.props.business;
        return (
            <li className="business-index-li"><Link to={`/businesses/${business.id}`}>{business.name}</Link></li>
        )
    }
}

export default BusinessIndexItem;