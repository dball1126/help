import {connect} from 'react-redux';
import MainSearch from './main_search';
import mainSearch from './main_search';
import {searchBusinesses} from '../../util/search_api_util';


const msp = (state, ownProps) => {
    const placeHolder = {};
    return {
        placeHolder: placeHolder
    }
}

const mdp = (dispatch) => {
    return {
        searchBusinesses: query => dispatch(searchBusinesses(query))
    }
}

export default connect(msp, mdp)(mainSearch);