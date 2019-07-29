export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
import * as CategoryApIUtil from '../util/category_util';

export const fetchCategory = (id) => {
    return (dispatch) => {
        return CategoryApIUtil.fetchCategory(id).then((payload) => {
            return dispatch(receiveCategory(payload))
        });
    }
}

export const fetchCategories = () => {
    return (dispatch) => {
        debugger
        return CategoryApIUtil.fetchCategories().then(payload => {
            return dispatch(receiveCategories(payload))
        });
    }
};


const receiveCategory = ({category}) => {
    return {
        type: RECEIVE_CATEGORY,
        category: category
    }
}

const receiveCategories = ({categories}) => {
    debugger
    return {
        type: RECEIVE_ALL_CATEGORIES,
        categories: categories
    }
}