import React from 'react';
import BusinessIndexItemContainer from './business_index_item_container';
import BusinessMap from '../business_show/business_map';
class BusinessIndex extends React.Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        this.props.fetchBusinesses();
    }

    

    render(){
        
        // const indexMap = this.props.businesses.map((business, i) => {
        //     const businessPosition = { lat: business.latitude, lng: business.longitude }
        //     const mapCenter = { lat: 40.722345, lng: -73.9873614 };
        //     debugger
        //     return (
        //         <BusinessMap businesses={this.props.businesses} position={businessPosition} center={mapCenter} key={i}/>
        //         // <BusinessMap key={i} />
        //     );
        // });
        
        
        const indexMap = () => {
            const businesses = this.props.businesses;
            
            if (businesses.length < 1){
                
                return (
                    ""
                )
            } else {
                
                return (
                    <BusinessMap businesses={businesses} />
                    // <BusinessMap key={i} />
                );
            }
        };


        const businesses = this.props.businesses.map((business, i) => {
            
            return (
                
                <BusinessIndexItemContainer key={i} business={business}/>
            );
        });
        
        return (
            <div className="businesses-container">
                <div className="businesses-picture-column">
                    <span>dummy data</span>
                </div>
                <div className="businesses-ul-container">
                    <ul className="businesses-ul">
                    {businesses}
                    </ul>
                </div>
                <div className="businesses-index-rightSide">
                    <span>dummy data</span>
                    {indexMap()}
                </div>
            </div>
        )
    }
}

export default BusinessIndex;
