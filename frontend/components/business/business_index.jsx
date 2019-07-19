import React from 'react';
import BusinessIndexItemContainer from './business_index_item_container';
import BusinessMap from '../business_show/business_map';
import BusinessHeaderContainer from '../greeting/business_header_container';
class BusinessIndex extends React.Component {
    constructor(props){
        super(props);
        this.didUpdate = false;        
    }

    componentDidMount(){
        
        if(this.props.businesses.length < 1 || this.props.businesses === undefined){ 
            
            $("div.business-index-header").html("<p>No Results: Nothing in the database matches the search input.</p>")
        } else {
            
           
        }
        
    }

    shouldComponentUpdate() {
        // console.log(this.didUpdate)
        // debugger
        
        if (this.props.history.action === "POP"){
            return false;
        }
        else if (this.props.match.action === "PUSH") {
            
            this.didUpdate = true

            return true;
        } else if(this.didUpdate === false){
            this.didUpdate = true;
            return true;
        } else{

            return false;
        }

    }

    
    indexMap(){
        
        const businesses = this.props.businesses;
        
        if (businesses.length < 1) {
            return (
                ""
            )
        } else {

            return (
                <BusinessMap businesses={businesses} />
            );
        }
    };
        busIndex(){
    const businesses = this.props.businesses.map((business, i) => {
        
        
        return (
            <BusinessIndexItemContainer key={i} business={business}/>
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
