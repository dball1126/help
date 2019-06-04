import React from 'react';
import BusinessIndexItemContainer from './business_index_item_container';
class BusinessIndex extends React.Component {

    componentDidMount(){
        this.props.fetchBusinesses();
    }

    render(){
        const businesses = this.props.businesses.map((business, i) => {
            return (
            
                <BusinessIndexItemContainer key={i} business={business}/>
            );
        });

        return (
            <div>
                <ul>
                {businesses}
                </ul>
            </div>
        )
    }
}

export default BusinessIndex;
