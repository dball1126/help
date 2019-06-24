import { connect } from 'react-redux';
import BusinessShowSearch from './business_show_search';
// import mainSearch from './main_search';
import { searchBusinesses, fetchBusinesses } from '../../actions/business_actions';

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

export default connect(msp, mdp)(BusinessShowSearch);