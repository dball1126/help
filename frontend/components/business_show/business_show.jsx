import React from 'react';
import Search from '../search/search';
import RedBanner from '../greeting/top_banner_red';
class BusinessShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        this.props.fetchBusiness(this.props.businessId);
    }

    

    render(){
        const business = this.props.business || "";

        return (
            <div>
                <RedBanner />
                
                
                    <Search />
                    
                
                <ul className="ul-business-info">
                    <li>HELLO</li>
                    <li>{business.name}</li>
                    <li>{}</li>
                </ul>
            </div>
        );
    }
}



export default BusinessShow;