import {connect} from 'react-redux';
import MainSearch from './main_search';
import mainSearch from './main_search';
import {searchBusinesses} from '../../util/search_api_util';
const msp = (state) => {
    return {

    }
}

const mdp = (dispatch) => {
    return {

    }
}

export default connect(msp, mdp)(mainSearch);