import React from 'react';
import BusinessIndexItemContainer from './business_index_item_container';
import BusinessMap from '../business_show/business_map';
import BusinessHeaderContainer from '../greeting/business_header_container';
class BusinessIndex extends React.Component {
    constructor(props){
        super(props);
        this.state ={hasMounted: false, businesses: []      };
        this.prevLocation = this.props.location.prev;
        this.catTracker = 0;
        this.catFetchTracker = 0;
       if (this.props.category !== undefined){
        this.categoryName = this.props.category.name;
       }
       if(this.props.businesses.length > 0){
           this.state.businesses = Object.values(this.props.businesses)
           
       }
        
    }

    componentWillReceiveProps(nextProps) {
        
        if(nextProps.match.params.categoryId !== this.props.categoryId && this.props.categoryId !== "") {
            
            this.props.fetchCategory(nextProps.match.params.categoryId)
            setTimeout(() => { 
            $("div.business-index-header").html(`<p>${this.props.category.name || ""}</p>`)
            }, 100)
            // this.setState({category:})
            

        }
    }

    componentDidMount(){
        
        if (this.props.location.locationName) $("div.business-index-header").html(`<p>${this.props.location.locationName}</p>`)
        
        if (this.props.category !== "" && this.props.category !== undefined) {
            
            this.props.fetchCategory(this.props.category.id)
            this.catFetchTracker++;
        }


        if (this.props.businesses.length > 0) {
            this.setState({ hasMounted: false })
        }
        // if (this.props.category) {
        //     this.setState({category: this.props.category})
        // }
        

        this.setState({hasMounted: true})
        setTimeout(() => { 
            if(this.props.businesses.length < 1 || this.props.businesses === undefined){ 
                $("div.business-index-header").html("<p>No Results: Nothing in the database matches the search input.</p>")
                $('.businesses-container').css('display', 'none');
            } 
            
            else if (this.props.category !== "" && this.props.businesses.length > 0) {
                
               
                $("div.business-index-header").html(`<p>${this.props.category.name}</p>`)
                
            }
        }, 100)
                
                
            
    }

    shouldComponentUpdate(ownProps) {
        // return true;
        
        if (ownProps.searching === "true") return false;
        let catUpdater = this.props.history.location.state;
        
        if (catUpdater === "flushDeal" || this.props.category !== undefined) {
        //    this.catTracker++;
           
           
           setTimeout(() => {
               if(ownProps.category !== "" && ownProps.category !== undefined){
                   
                   if(ownProps.category.name === undefined) ownProps.category.name = "";
                    $("div.business-index-header").html(`<p>${ownProps.category.name}</p>`)
               }
           }, 100)
            this.props.location.state = null;
            return true;
        }
        let tracking = this.props.location.linkTracker || undefined;
       
        if (tracking !== undefined && this.props.catLocation === "true" && this.linkTracker < 1) {
          
           
            return true
        };
       
        if(this.props.catLocation === "true" && this.catTracker < 2) {
            this.catTracker++;
            return true;
        }
        if (this.state.hasMounted === false) {
            

            return true;
        } else {

            return false;
        }

    }
   
    
    indexMap(){
        if (this.props.businesses.length > 0) {
            this.state.businesses = Object.values(this.props.businesses)
        }
        // const businesses = this.props.businesses;
        
        if (this.props.businesses.length < 1) {
            return (
                ""
            )
        } else {

            return (
                <BusinessMap businesses={Object.values(this.props.businesses)} prev={this.prevLocation} catLocation={this.props.catLocation} history={this.props.history} location={this.props.location}/>
            );
        }
        
    };
        busIndex(ownprops){
            
            if (this.props.businesses.length > 0) {
                this.state.businesses = Object.values(this.props.businesses)
                
                const businesses = this.state.businesses.map((business, i) => {
                    
                    
                    return (
                        <BusinessIndexItemContainer key={i} business={business} prev={this.prevLocation} catLocation={this.props.catLocation} history={this.props.history} location={this.props.location}/>
                        );
                    })
                    return businesses
                } else {
                    return []
                }
                
        };
    

    render(){
        let catUpdater = this.props.history.location.state;
        if (catUpdater === "flushDeal") {
            
            this.props.fetchCategory(this.props.match.params.categoryId);
            
        }
        
       


        return (
            <div>
                {/* <RedBanner /> */}
                <BusinessHeaderContainer currentUser={this.props.currentUser} />
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