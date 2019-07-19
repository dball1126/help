import { RECEIVE_SEARCHED_BUSINESSES } from '../actions/business_actions';



const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_SEARCHED_BUSINESSES:
            return Object.assign({}, action.businesses);
        default:
            return oldState;
    }
}

export default searchReducer;