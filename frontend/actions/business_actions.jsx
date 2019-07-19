export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESS_REVIEWS = 'RECEIVE_BUSINESS_REVIEWS';
export const RECEIVE_START_BUSINESSES = 'RECEIVE_START_BUSINESSES';
export const RECEIVE_SEARCHED_BUSINESSES = 'RECEIVE_SEARCHED_BUSINESSES';
import * as SearchApiUtil from '../util/search_api_util';
import * as BusinessApiUtil from '../util/business_api_util';
import * as StartApiUtil from '../util/start_page_util';

export const fetchBusinesses = () => {
    return (dispatch) => {
        return BusinessApiUtil.fetchBusinesses().then(payload => {
            return dispatch(receiveBusinesses(payload))
        });
    };
};

export const fetchBusiness = (id) => {
    return (dispatch) => {
        return BusinessApiUtil.fetchBusiness(id).then(payload => {
            return dispatch(receiveBusiness(payload)) 
        }).then(payload => {
            return dispatch(receiveBusinessReviews(payload))
        });
    }
};

export const startPageBusinesses = () => {

    return (dispatch) => {
        return StartApiUtil.startPageBusinesses().then(payload => {
            
            return dispatch(receiveStartPageBusinesses(payload))
        });
    }
};

export const searchBusinesses = (query) => {
        
    return (dispatch) => {
        return SearchApiUtil.searchBusinesses(query).then(payload =>{
            
            return dispatch(receiveSearchedBusinesses(payload))
        });
    }
};


const receiveStartPageBusinesses = ({businesses}) => {
    return {
        type: RECEIVE_START_BUSINESSES,
        businesses: businesses
    }
}

const receiveBusinesses = ({businesses}) => {
        
        return {
        type: RECEIVE_ALL_BUSINESSES,
        businesses: businesses
        }
};

const receiveSearchedBusinesses = ({businesses}) => {
    return {
        type: RECEIVE_SEARCHED_BUSINESSES,
        businesses: businesses
    }
}

const receiveBusiness = ({business}) => {
    
    return {
        type: RECEIVE_BUSINESS, 
        business: business,
        reviews: business.reviews
    }
};

const receiveBusinessReviews = ({business}) => {
    
    
    return {
        type: RECEIVE_BUSINESS_REVIEWS,
        business: business
    }
}