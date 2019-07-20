import { connect } from 'react-redux';
import Homepage from './homepage';
import { login, logout } from '../../actions/session_actions';
import { startPageBusinesses, fetchBusinesses} from '../../actions/business_actions';
const mapStateToProps = (state) => {

    
    return {
        businesses: Object.values(state.entities.start) || {}
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       startPageBusinesses: () => dispatch(startPageBusinesses()),
       fetchBusinesses: () => dispatch(fetchBusinesses())
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(Homepage);