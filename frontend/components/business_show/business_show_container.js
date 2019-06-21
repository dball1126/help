import {fetchBusiness, fetchBusinesses} from '../../actions/business_actions';
import BusinessShow from './business_show';
import {connect} from 'react-redux';
import {selectBusinessReviews, selectBusiness} from '../../reducers/selectors';
// import { fetchReviews} from '../../actions/review_actions';
const mapStateToProps = (state, ownProps) => {
    const businessId = parseInt(ownProps.match.params.businessId);
    // const business = selectBusiness(state.entities, businessId);
    const business = state.entities.businesses[businessId];  //INVESTIGATE
    const currentUser = state.entities.users[state.session.id];
    // const reviews = selectBusinessReviews(state.entities, business);
    // const reviews = business.reviews || {};
 
    

    const reviews = Object.keys(state.entities.reviews).map(id => state.entities.reviews[id])
    
    // console.log(reviews)
    return {
        currentUser: currentUser,
        business,
        businessId,
        reviews : reviews
        
        // currentUser
        //  reviews: business.reviews
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusiness: (id) => dispatch(fetchBusiness(id))
        // fetchReviews: () => dispatch(fetchReviews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);