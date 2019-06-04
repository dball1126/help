export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES'
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS'
import * as BusinessApiUtil from '../util/business_api_util';


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
        });
    };
};


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