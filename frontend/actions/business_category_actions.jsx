export const RECEIVE_BUSINESS_CATEGORY = 'RECEIVE_BUSINESS_CATEGORY';
export const RECEIVE_ALL_BUSINESS_CATEGORIES = 'RECEIVE_ALL_BUSINESS_CATEGORIES';
import * as BusinessCategoryApIUtil from '../util/business_category_api_util';

export const fetchBusinessCategory = (id) => {
    return (dispatch) => {
        return BusinessCategoryApIUtil.fetchBusinessCategory(id).then((payload) => {
            return dispatch(receiveBusinessCategory(payload))
        });
    }
}

export const fetchBusinessCategories = () => {
    return (dispatch) => {
        return BusinessCategoryApIUtil.fetchBusinessCategories().then((payload) => {
            return dispatch(receiveBusinessCategories(payload))
        });
    }
};


const receiveBusinessCategory = ({ business_category }) => {
    return {
        type: RECEIVE_BUSINESS_CATEGORY,
        business_category: business_category
    }
}

const receiveBusinessCategories = ({ business_categories }) => {
    return {
        type: RECEIVE_ALL_BUSINESS_CATEGORIES,
        business_categories: business_categories
    }
}