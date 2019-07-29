import {RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY} from '../actions/category_actions';

const categoriesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CATEGORY:
            return Object.assign({}, oldState, {[action.category.id]: action.category})
        case RECEIVE_ALL_CATEGORIES:
            debugger
            return Object.assign({}, action.categories)
        default:
            return newState;
    }

}

export default categoriesReducer;