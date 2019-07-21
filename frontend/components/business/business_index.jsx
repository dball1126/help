import React from 'react';
import BusinessIndexItemContainer from './business_index_item_container';
import BusinessMap from '../business_show/business_map';
import BusinessHeaderContainer from '../greeting/business_header_container';
class BusinessIndex extends React.Component {
    constructor(props){
        super(props);
        this.state ={hasMounted: false, businesses: []      };
        this.prevLocation = this.props.location.prev;
        
    }

    componentDidMount(){
        this.setState({hasMounted: true, businesses: this.props.businesses})
        if(this.props.businesses.length < 1 || this.props.businesses === undefined){ 
            
            $("div.business-index-header").html("<p>No Results: Nothing in the database matches the search input.</p>")
        } else {
            
           
        }
        
    }

    shouldComponentUpdate() {
        
        if (this.state.hasMounted === false) {
            

            return true;
        } else {

            return false;
        }

    }

    
    indexMap(){
        
        // const businesses = this.props.businesses;
        
        if (this.state.businesses.length < 1) {
            return (
                ""
            )
        } else {

            return (
                <BusinessMap businesses={this.state.businesses} />
            );
        }
        
    };
        busIndex(){
           
    const businesses = this.state.businesses.map((business, i) => {
        
        
        return (
            <BusinessIndexItemContainer key={i} business={business} prev={this.prevLocation}/>
        );
    })
        return businesses
        };
    

    render(){
        
       

        
        
        


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
                                {this.busIndex()}
                                </ul>
                            </div>
                            <div className="businesses-index-rightSide">
                                <div className="business-index-map">
                                    {this.indexMap()}
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
