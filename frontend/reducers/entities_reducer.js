import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import businessesReducer from './businesses_reducer';
import reviewsReducer from './reviews_reducer';
import startReducer from './start_reducer';
const entitiesReducer = combineReducers({users: usersReducer,
                                businesses: businessesReducer,
                                reviews: reviewsReducer,
                                start: startReducer})


export default entitiesReducer;