import { connect } from 'react-redux';
import Homepage from './homepage';
import { login, logout } from '../../actions/session_actions';
import { startPageBusinesses, fetchBusinesses, searchCategories, searchBusinesses} from '../../actions/business_actions';
import {fetchCategories, fetchCategory} from '../../actions/category_actions';

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
       fetchCategories: () => dispatch(fetchCategories()),
       fetchCategory: (id) => dispatch(fetchCategory(id)),
       searchBusinesses: (query) => dispatch(searchBusinesses(query))
         
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(Homepage);