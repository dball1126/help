import { fetchBusinesses } from '../../actions/business_actions';
import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import {fetchCategory} from '../../actions/category_actions';


const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    let businesses = Object.values(state.search) || {};
    let category = "";
    let catLocation = "";
    if(ownProps.location.prev === "homepage"){
        businesses = Object.values(state.entities.businesses)
    }
    if (ownProps.location.pathname.includes("categories")) {
        category = state.entities.categories[ownProps.match.params.categoryId];
        catLocation = "true"
        // businesses = Object.values(category.businesses)
        
    }
    if (category !== "") {

        businesses = Object.values(state.entities.businesses)
    }
    
    return {
        businesses: businesses,
        currentUser: currentUser || {},
        category: category,
        catLocation: catLocation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        fetchCategory: (id) => dispatch(fetchCategory(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);