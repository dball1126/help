import {RECEIVE_BUSINESS_CATEGORY, RECEIVE_ALL_BUSINESS_CATEGORIES} from '../actions/business_category_actions';

const businessCategoriesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_BUSINESS_CATEGORY:
            return Object.assign({}, oldState, {[action.business_category.id]: business_category})
        case RECEIVE_ALL_BUSINESS_CATEGORIES:
            return Object.assign({}, action.business_categories)
        default:
            return newState;
    }
}