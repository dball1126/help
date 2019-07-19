import {connect} from 'react-redux';
import MainSearch from './main_search';
// import mainSearch from './main_search';
import { searchBusinesses} from '../../actions/business_actions';

const msp = (state, ownProps) => {
    const placeHolder = {};
    return {
        placeHolder: placeHolder
    }
}

const mdp = (dispatch) => {
    return {
        // fetchBusinesses: () => dispatch(fetchBusinesses()),
        searchBusinesses: query => dispatch(searchBusinesses(query))
    }
}

export default connect(msp, mdp)(MainSearch);