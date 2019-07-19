import { connect } from 'react-redux';
import BusinessShowSearch from './business_show_search';
// import mainSearch from './main_search';
import { searchBusinesses, fetchBusinesses } from '../../actions/business_actions';

const msp = (state, ownProps) => {
    const placeHolder = {};
    const businessShowSearchBar = "true"
    return {
        placeHolder: placeHolder,
        businessShowSearchBar: businessShowSearchBar
    }
}

const mdp = (dispatch) => {
    return {
        // fetchBusinesses: () => dispatch(fetchBusinesses()),
        searchBusinesses: query => dispatch(searchBusinesses(query))
    }
}

export default connect(msp, mdp)(BusinessShowSearch);