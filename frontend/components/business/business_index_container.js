import { fetchBusinesses } from '../../actions/business_actions';
import { connect } from 'react-redux';
import BusinessIndex from './business_index';

const mapStateToProps = (state) => {
    const currentUser = state.entities.users[state.session.id];
    
    return {
        businesses: Object.values(state.search) || {},
        currentUser: currentUser || {}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);