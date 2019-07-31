import {RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY} from '../actions/category_actions';
import {RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES, RECEIVE_SEARCHED_BUSINESSES, RECEIVE_SEARCHED_CATEGORIES} from '../actions/business_actions';
const categoriesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CATEGORY:
            
            return Object.assign({}, {[action.category.id]: action.category})
        case RECEIVE_ALL_CATEGORIES:
            return Object.assign({}, action.categories)
        
        // case RECEIVE_BUSINESS:
        //     return Object.assign({}, oldState, action.categories);
        
        // case RECEIVE_ALL_BUSINESSES:
        //     return action.businesses;
            default:
            return newState;
    }

}

export default categoriesReducer;