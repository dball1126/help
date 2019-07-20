import { fetchBusinesses } from '../../actions/business_actions';
import { connect } from 'react-redux';
import BusinessIndex from './business_index';



const mapStateToProps = (state, ownProps) => {
    
    const currentUser = state.entities.users[state.session.id];
    let businesses = Object.values(state.search) || {};
    if(ownProps.location.prev === "homepage"){
        businesses = Object.values(state.entities.businesses)
    }
    
    return {
        businesses: businesses,
        currentUser: currentUser || {}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);