import {connect} from 'react-redux';
import BusinessIndexItem from './business_index_item';

const mapStateToProps = (state, ownProps) => {
    
    let business = state.search[ownProps.business.id] || {};
    let catLocation = "";
    let category = "";
    if(ownProps.prev === "homepage" || ownProps.catLocation === "true"){
       
        business = state.entities.businesses[ownProps.business.id] || {}
    }
    
    // if (ownProps.location.pathname.includes("categories")) {
    //     // category = state.entities.categories[ownProps.match.params.categoryId];
    //     catLocation = "true"
    //     // businesses = Object.values(category.businesses)

    // }
    
    return {
        business: business
    }
}

const mapDispatchToProps = (dispatch) => {
    
};

export default connect(mapStateToProps)(BusinessIndexItem);