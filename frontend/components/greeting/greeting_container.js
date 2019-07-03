import {connect} from 'react-redux';
import Greeting from './greeting';
import {login, logout} from '../../actions/session_actions';

const mapStateToProps = (state) => {
    
    
    return {

        currentUser: state.entities.users[state.session.id],
        path: state.path

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        demoLogin: () => dispatch(login({email: 'demo@demo.com', password: 'demouser'}))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(Greeting);