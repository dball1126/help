import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import history from '../util/browser_util';
import App from './app';
import { LastLocationProvider } from 'react-router-last-location';
const Root = ({ store }) => {
   
    return (
        <Provider store={store}>
            <HashRouter >
                <LastLocationProvider>
                <App />
              </LastLocationProvider>
               
            </HashRouter>

        </Provider>
    )
}

export default Root;