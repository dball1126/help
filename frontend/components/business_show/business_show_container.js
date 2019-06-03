import {fetchBusiness} from '../../actions/business_actions';
import BusinessShow from './business_show';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownprops) => {
    const business = state.entities.businesses[ownprops.match.params.businessId];
    return {
        business: business
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusiness: (id) => dispatch(fetchBusiness(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);