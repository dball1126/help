import { connect } from 'react-redux';
import Homepage from './homepage';
import { login, logout } from '../../actions/session_actions';
import { startPageBusinesses, fetchBusinesses, searchCategories} from '../../actions/business_actions';
import { fetchBusinessCategories, fetchBusinessCategory} from '../../actions/business_category_actions';
import {fetchCategories} from '../../actions/category_actions';

const mapStateToProps = (state) => {

    
    return {
        businesses: Object.values(state.entities.start) || {},
        categories: Object.values(state.entities.categories) || {}
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       startPageBusinesses: () => dispatch(startPageBusinesses()),
       fetchBusinesses: () => dispatch(fetchBusinesses()),
       fetchCategories: () => dispatch(fetchCategories())
        
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(Homepage);