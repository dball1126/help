import {fetchBusiness, fetchBusinesses} from '../../actions/business_actions';
import BusinessShow from './business_show';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    
    const businessId = parseInt(ownProps.match.params.businessId);

    const business = state.entities.businesses[businessId];  //INVESTIGATE
    const currentUser = state.entities.users[state.session.id];
    
 
    const reviews = Object.keys(state.entities.reviews).map(id => state.entities.reviews[id])
    
    // const categories = Object.keys(state.entities.categories).map(id => state.entities.categories[id]) 
    let revs = [];
    // if(Object.entries(categories).length === 0 && categories.constructor === Object) categories = [];
    
    reviews.forEach(ele => {
        
        if (`${ele.business_id}` === ownProps.match.params.businessId){
        revs.push(ele)
        }
    })
    
    //Extremely important Note:  the revs is taking out the reviews specific to the Business, if you remove it you will break it.
    
    return {
        currentUser: currentUser,
        business,
        businessId,
        reviews : revs
        // categories: categories
        
        // currentUser
        //  reviews: business.reviews
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusiness: (id) => dispatch(fetchBusiness(id))
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);