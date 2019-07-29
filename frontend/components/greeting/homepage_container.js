import { connect } from 'react-redux';
import Homepage from './homepage';
import { login, logout } from '../../actions/session_actions';
import { startPageBusinesses, fetchBusinesses} from '../../actions/business_actions';
import {fetchCategories} from '../../actions/category_actions';
const mapStateToProps = (state) => {

    
    return {
        businesses: Object.values(state.entities.start) || {},
        categories: state.entities.categories
        
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