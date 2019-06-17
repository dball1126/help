import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import {fetchReviews} from './util/review_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    window.fetchReviews = fetchReviews;
        if (window.currentUser) {
            const preloadedState = {
                session: { id: window.currentUser.id },
                entities: {
            users: { [window.currentUser.id]: window.currentUser }
        }
    };
            store = configureStore(preloadedState);
        } else {
            store = configureStore();
        }

   ReactDOM.render(<Root store={store} />, root); 
});


