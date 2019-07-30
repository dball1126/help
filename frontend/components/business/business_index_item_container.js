import {connect} from 'react-redux';
import BusinessIndexItem from './business_index_item';

const mapStateToProps = (state, ownProps) => {
    
    let business = state.search[ownProps.business.id] || {};
    
    if(ownProps.prev === "homepage" || ownProps.catLocation === "true"){
        
        business = state.entities.businesses[ownProps.business.id]
    }
    
    return {
        business: business
    }
}

const mapDispatchToProps = (dispatch) => {
    
};

export default connect(mapStateToProps)(BusinessIndexItem);