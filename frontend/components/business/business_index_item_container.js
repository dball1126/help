import {connect} from 'react-redux';
import BusinessIndexItem from './business_index_item';

const mapStateToProps = (state, ownProps) => {
    const business = state.entities.businesses[ownProps.match.params.businessId];
    return {
        business: business
    }
}

const mapDispatchToProps = (dispatch) => {
    
};

export default connect(mapStateToProps)(BusinessIndexItem);