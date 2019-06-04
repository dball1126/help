import React from 'react';
import Search from '../search/search';
import Banner from '../greeting/top_banner';
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
                <Banner />
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