export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESS_REVIEWS = 'RECEIVE_BUSINESS_REVIEWS';
import * as BusinessApiUtil from '../util/business_api_util';


export const fetchBusinesses = () => {
    return (dispatch) => {
        return BusinessApiUtil.fetchBusinesses().then(payload => {
            return dispatch(receiveBusinesses(payload))
        });
    };
};

// export const fetchBusiness = (id) => {
//     return (dispatch) => {
//         return BusinessApiUtil.fetchBusiness(id).then(payload => {
//             return dispatch(receiveBusiness(payload))
//         }, (business) => { return dispatch(receiveBusinessReviews(business)) } );
//     };
// };
export const fetchBusiness = (id) => {
    return (dispatch) => {
        return BusinessApiUtil.fetchBusiness(id).then(payload => {
            return dispatch(receiveBusiness(payload)) 
        }).then(payload => {
            return dispatch(receiveBusinessReviews(payload))
        });
    }
};

// export const login = (user) => {
//     return (dispatch) => {
//         return SessionApiUtil.login(user).then(user => {
//             return dispatch(receiveCurrentUser(user))
//         }, (errors) => { return dispatch(receiveErrors(errors.responseJSON)) });
//     };
// };
// attach another .then for  receive Reviews

const receiveBusinesses = ({businesses}) => {
        return {
        type: RECEIVE_ALL_BUSINESSES,
        businesses: businesses
        }
};

const receiveBusiness = ({business}) => {
    
    return {
        type: RECEIVE_BUSINESS, 
        business: business
    }
};

const receiveBusinessReviews = ({business}) => {
    debugger
    return {
        type: RECEIVE_BUSINESS_REVIEWS,
        business: business
    }
}