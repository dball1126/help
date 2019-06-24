import React from 'react';
import BusinessIndexItemContainer from './business_index_item_container';
import BusinessMap from '../business_show/business_map';
import RedBanner from '../greeting/top_banner_red';
import BusinessHeaderContainer from '../greeting/business_header_container';
class BusinessIndex extends React.Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        
        if(this.props.businesses.length < 1 || this.props.businesses === undefined){ 
        this.props.fetchBusinesses();
        }
    }

    

    render(){
        
        
        const indexMap = () => {
            const businesses = this.props.businesses;
            
            if (businesses.length < 1){
                return (
                    ""
                )
            } else {
                
                return (
                    <BusinessMap businesses={businesses} />
                );
            }
        };


        const businesses = this.props.businesses.map((business, i) => {
            
            return (
                <BusinessIndexItemContainer key={i} business={business}/>
            );
        });
        
        return (
            <div>
                {/* <RedBanner /> */}
                <BusinessHeaderContainer currentUser={this.props.currentUser}/>
                <div className="business-index-container">
                    <div className="business-index-header">
                        <div></div>
                    </div>
                    <div className="business-index-inner-container">
                        <div className="businesses-container">
                            <div className="businesses-ul-container">
                                <ul className="businesses-ul">
                                {businesses}
                                </ul>
                            </div>
                            <div className="businesses-index-rightSide">
                                <div className="business-index-map">
                                    {indexMap()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessIndex;
